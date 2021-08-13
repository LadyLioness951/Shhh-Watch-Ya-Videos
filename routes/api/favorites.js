const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/api/uploads/:id/favorites', ensureLoggedIn, favoritesCtrl.create);

module.exports = router;