const Like = require('../../models/like');

module.exports = {
    create
}

async function create(req, res) {
    Like.findOne({'user': req.user._id}, function(err, like) {
        if (like) return res.redirect(`/profile/${req.params.id}`);
        req.body.user = req.user._id;
        req.body.profile = req.params.id;
        Like.create(req.body, function(err, like) {
            if (err) console.log(err);
            res.redirect(`/profile/${req.params.id}`);
        })
    })
}