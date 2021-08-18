const express = require('express');
const router = express.Router();
const hashtagsCtrl = require('../../controllers/api/hashtags');

router.get('/', hashtagsCtrl.index);

module.exports = router;