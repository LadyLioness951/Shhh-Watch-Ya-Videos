const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Category = require('../../models/category');
const Follow = require('../../models/follow');
const Upload = require('../../models/upload');
const Like = require('../../models/like');
const Favorite = require('../../models/favorite');

module.exports = {
  create,
  login, 
  checkToken,
  getProfile,
  getBookmark,
  editProfile,
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    let categories = req.body.categories.map(async function(category) {
      let cat = await Category.findOne({name: category});
      return cat._id
    });
    req.body.categories = await Promise.all(categories);
    // Add the user to the database
    const user = await User.create(req.body);
    await user.populate('categories').execPopulate();
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code 
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function getProfile(req, res) {
  const following = await Follow.find({follower: req.user._id}).populate('following', 'name').exec();
  const followers = await Follow.find({following: req.user._id}).populate('follower', 'name').exec();
  const uploads = await Upload.find({user: req.user._id}).sort('-createdAt').populate('hashtags').exec();
  let likeCount = 0
  uploads.forEach(async (upload) => {
    const likes = await Like.find({upload: upload._id});
    likeCount += likes.length;
  }); 
  res.json({
    following, 
    followers,
    uploads,
    likeCount,
  })
}

async function getBookmark(req, res) {
  const favorites = await Favorite.find({user: req.user._id}).populate('upload').exec();
  res.json({favorites})
}

async function editProfile(req, res) {
  
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

