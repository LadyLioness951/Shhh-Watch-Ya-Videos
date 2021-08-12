const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



module.exports = router;