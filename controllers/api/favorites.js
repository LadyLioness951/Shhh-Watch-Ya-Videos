const Favorite = require('../../models/favorite');

module.exports = {
    create
}

async function create(req, res) {
    let favorite = await Favorite.findOne({user: req.user._id, upload: req.params.id});
    if (favorite) return res.json('already favorited');
    favorite = await Favorite.create({user: req.user._id, upload: req.params.id});
    res.json(favorite);
}