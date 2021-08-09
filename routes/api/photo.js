const express = require('express');
const router = express.Router();
const multer = require('multer');
const photosCtrl = require('../../controllers/api/photos');

router.post('/', photosCtrl.create);

