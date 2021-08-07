require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Animals'},
        {name: 'Beauty'},
        {name: 'Cars'},
        {name: 'Cooking'},
        {name: 'Dance'},
        {name: 'Fashion'},
        {name: 'Fitness'},
        {name: 'Funny'},
        {name: 'Gaming'},
        {name: 'Goofy'},
        {name: 'Pranks'},
        {name: 'Sports'},
    ]);
    console.log(categories)

    process.exit();
})();
