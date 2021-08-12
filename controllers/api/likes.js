const Like = require('../../models/like');

module.exports = {
    create
}

async function create(req, res) {
    let like = await Like.findOne({user: req.user._id, upload: req.params.id});
    if (like) return res.json('already liked');
    like = await Like.create({user: req.user._id, upload: req.params.id});
    res.json(like);
}