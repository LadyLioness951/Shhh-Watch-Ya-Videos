const express = require('express');
const router = express.Router();
const likesCtrl = require('../../controllers/api/likes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/api/uploads/:id/likes', ensureLoggedIn, likesCtrl.create);

module.exports = router;