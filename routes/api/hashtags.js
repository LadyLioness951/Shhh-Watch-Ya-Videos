const express = require('express');
const router = express.Router();
const hashtagsCtrl = require('../../controllers/api/hashtags');

router.get('/', hashtagsCtrl.index);
router.post('/', hashtagsCtrl.create);

module.exports = router;