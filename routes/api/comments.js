const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/api/uploads/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.delete('/api/comments/:id', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;