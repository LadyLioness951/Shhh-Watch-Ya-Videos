const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hashtagSchema = new Schema({
    name: {
        type: String, 
    }, 
  }, {
    timestamps: true,
  });

  module.exports = mongoose.model('Hashtag', hashtagSchema);