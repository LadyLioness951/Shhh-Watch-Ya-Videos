const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
}, {
  timestamps: true
});

const uploadSchema = new Schema({
  url: {type: String, required: true},
  title: String,
  isVideo: Boolean,
  comments: [commentSchema],
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
  hashtags: [{type: Schema.Types.ObjectId, ref: 'Hashtag'}],
}, {
  timestamps: true,
});



module.exports = mongoose.model('Upload', uploadSchema);