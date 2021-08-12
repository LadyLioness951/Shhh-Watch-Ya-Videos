const express = require('express');
const router = express.Router();
const upload = require("multer")();
const profilesCtrl = require('../../controllers/api/profiles');


router.get('/', profilesCtrl.index);
// POST /api/photos/upload
router.post('/', upload.single('upload'), profilesCtrl.upload);
// The 'photo' maps to the name used when adding the input to the FormData object

module.exports = router;