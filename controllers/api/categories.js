const Category = require('../../models/category');

module.exports = {
    index
};

async function index(req, res) {
    const categories = await Category.find({}).sort('name').exec();
    res.json(categories);
}

