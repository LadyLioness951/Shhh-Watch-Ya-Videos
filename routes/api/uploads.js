const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadsCtrl = require('../../controllers/api/uploads');

router.post('/', uploadsCtrl.create);

