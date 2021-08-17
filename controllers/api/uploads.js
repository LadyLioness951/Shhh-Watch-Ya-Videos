const uploadFile = require('../../config/upload-file');
const Upload = require('../../models/upload');

module.exports = {
  index,
  upload,
  getForYouVideos,
  userVideosIFollow
};

async function index(req, res) {
  const uploads = await Upload.find({}).sort('-createdAt').populate('user', 'name').exec();
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
    const docs = await Upload.find({categories: cat});
    uploads.push(...docs);
  }
  const forYou = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  res.json(forYou);
}

async function userVideosIFollow(req, res) {
  const uploads = [];
  for(let fol of req.user.following) {
    const docs = await Upload.find({following: fol});
    uploads.push(...docs);
  }
  const followVid = uploads.reduce((acc, upload) => {
    return acc.some(u => u._id.equals(upload._id)) ? acc : [...acc, upload]
  },[]);
  console.log("LOOK HERE", followVid);
  res.json(followVid);
}
