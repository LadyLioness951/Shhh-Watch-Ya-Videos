const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/api/likes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/profile/:id/like', ensureLoggedIn, likesCtrl.create);

module.exports = router;