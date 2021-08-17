require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Hashtag = require('./models/hashtag');

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
        {name: 'Music'},
        {name: 'Pranks'},
        {name: 'Sports'},
        {name: 'Other'}
    ]);

    await Hashtag.deleteMany({});
    const hashtags = await Hashtag.create([
        {name: '#blessed'},
        {name: '#gaming'},
        {name: '#goals'},
        {name: '#summer'},
        {name: '#drinks'},
        {name: '#itsfriday'},
        {name: '#music'},
        {name: '#instramental'},
        {name: '#christmas'},
        {name: '#halloween'},
        {name: '#love'},
        {name: '#beautiful'},
        {name: '#fashion'},
        {name: '#cute'},
        {name: '#happy'},
        {name: '#followme'},
        {name: '#like4like'},
        {name: '#friends'},
        {name: '#fun'},
        {name: '#family'},
        {name: '#amazing'},
        {name: '#life'},
        {name: '#foodporn'},
        {name: '#dog'},
        {name: '#party'},
        {name: '#photography'},
        {name: '#motivation'},
        {name: '#funny'},
        {name: '#healthy'},
        {name: '#lifestyle'},
        {name: '#followback'}
    ]);

    console.log(categories);
    console.log(hashtags);

    process.exit();
})();
