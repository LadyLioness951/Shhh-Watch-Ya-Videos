const uploadFile = require('../../config/upload-file');
const Upload = require('../../models/upload');

module.exports = {
  index,
  upload,
  getForYouVideos
};

async function index(req, res) {
  const uploads = await Upload.find({}).sort('-createdAt').populate('user', 'name').exec();
  console.log(uploads);
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
  const forYou = [];
  req.user.categories.forEach(async (cat) => {
    const uploads = await Upload.find({'categories_id': cat});
    forYou.push(uploads)
  })
  console.log(forYou);
  res.json(forYou);
}