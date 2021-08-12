const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  img: Boolean,
  name: {type: String, required: true},
  Following: Number,
  Follower: Number,
  Likes: Number,
  url: {type: String, required: true},
  isVideo: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Profile', profileSchema);