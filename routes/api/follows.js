const express = require('express');
const router = express.Router();
const followCtrl = require('../../controllers/api/follows');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, followCtrl.create);

module.exports = router;