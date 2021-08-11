const express = require('express');
const router = express.Router();
const upload = require("multer")();
const uploadsCtrl = require('../../controllers/api/uploads');


// GET /api/photos
router.get('/', uploadsCtrl.index);
// POST /api/photos/upload
router.post('/', upload.single('upload'), uploadsCtrl.upload);
// The 'photo' maps to the name used when adding the input to the FormData object

module.exports = router;