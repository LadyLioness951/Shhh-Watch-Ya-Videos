const Hashtag = require('../../models/hashtag');

module.exports = {
    index
};

async function index(req, res) {
    const hashtags = await Hashtag.find({}).sort('name').exec();
    res.json(hashtags);
}