const Follow = require('../../models/follow');
const uploadFile = require('../../config/upload-file');
const Upload = require('../../models/upload');
const Like = require('../../models/like');
const Favorite = require('../../models/favorite');

module.exports = {
  index,
  upload,
  getForYouVideos,
  userVideosIFollow,
  getLikedVideos,
  getFavoritedVideos
};

async function index(req, res) {
  const uploads = await Upload.find({}).sort('-createdAt').populate('user', 'name', 'hashtags').exec();
  res.json(uploads);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      // The uploadFile function will return the uploaded file's S3 endpoint
      const uploadURL = await uploadFile(req.file);
      const uploadDoc = await Upload.create({
        url: uploadURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title,
        isVideo: req.file.mimetype.startsWith('video'),
        user: req.user._id,
      });
      uploadDoc.categories.push(...req.body.categories.split(','));
      uploadDoc.hashtags.push(...req.body.hashtags.split(','));
      await uploadDoc.save();
      res.json(uploadDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  } 
}

async function getForYouVideos(req, res) {
  const uploads = [];
  for(let cat of req.user.categories) {
    const docs = await Upload.find({categories: cat}).populate('user', 'hashtags').exec();
    uploads.push(...docs);
  }
  const forYou = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  res.json(forYou);
}

async function userVideosIFollow(req, res) {
  const following = await Follow.find({follower: req.user._id});
  const uploads = [];
  for(let fol of following) {
    const docs = await Upload.find({user: fol.following}).populate('hashtags').exec();
    uploads.push(...docs);
  }
  const followVid = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  res.json(followVid);
}

async function getLikedVideos(req, res) {
  const likes = await Like.find({user: req.user._id});
  const uploads = [];
  for(let like of likes) {
    const docs = await Upload.find({_id: like.upload}).populate('hashtags').exec();
    uploads.push(...docs);
  }
  const likedVideos = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  res.json(likedVideos);
}

async function getFavoritedVideos(req, res) {
  const favorites = await Favorite.find({user: req.user._id});
  const uploads = [];
  for(let favorite of favorites) {
    const docs = await Upload.find({_id: favorite.upload}).populate('hashtags').exec();
    uploads.push(...docs);
  }
  const favoritedVideos = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  res.json(favoritedVideos);
}
