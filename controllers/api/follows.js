const Follow = require('../../models/follow');

module.exports = {
    create
}

async function create(req, res) {
    let follow = await Follow.findOne({follower: req.user._id, following: req.body.userId});
    if (follow) return res.json('already followed');
    follow = await Follow.create({follower: req.user._id, following: req.body.userId});
    res.json(follow);
}

