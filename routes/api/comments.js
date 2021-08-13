const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/upload/:id/comments', ensureLoggedIn, commentsCtrl.create);
router.put('/upload/:uploadId/comments/:commentId', ensureLoggedIn, commentsCtrl.update);
router.delete('/upload/:uploadId/comments/:commentId', ensureLoggedIn, commentsCtrl.delete);

module.exports = router;