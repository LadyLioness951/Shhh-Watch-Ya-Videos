const express = require('express');
const router = express.Router();
const followCtrl = require('../../controllers/api/follows');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



module.exports = router;