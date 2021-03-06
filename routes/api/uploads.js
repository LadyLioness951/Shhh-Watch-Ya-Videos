const express = require('express');
const router = express.Router();
const upload = require("multer")();
const uploadsCtrl = require('../../controllers/api/uploads');

// GET /api/photos
router.get('/', uploadsCtrl.index);
// POST /api/photos/upload
router.post('/', upload.single('upload'), uploadsCtrl.upload);
// The 'photo' maps to the name used when adding the input to the FormData object
router.get('/forYou', uploadsCtrl.getForYouVideos);
router.get('/followVid', uploadsCtrl.userVideosIFollow);
router.get('/likedVideos', uploadsCtrl.getLikedVideos);
router.get('/favoritedVideos', uploadsCtrl.getFavoritedVideos);

module.exports = router;