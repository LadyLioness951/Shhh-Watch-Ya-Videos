const uploadFile = require('../../config/upload-file');
const Upload = require('../../models/upload');

module.exports = {
  index,
  upload
};

async function index(req, res) {
  const uploads = await Upload.find({}).sort('-createdAt').exec();
  res.json(uploads);
}

async function upload(req, res) {
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      console.log(req.file);
      // The uploadFile function will return the uploaded file's S3 endpoint
      const uploadURL = await uploadFile(req.file);
      const uploadDoc = await Upload.create({
        url: uploadURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title
      });
      res.json(uploadDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}