const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  url: {type: String, required: true},
  title: String,
  // isVideo: {type: Boolean, type: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Upload', uploadSchema);