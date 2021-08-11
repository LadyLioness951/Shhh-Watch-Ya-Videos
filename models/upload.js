const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema({
  url: {type: String, required: true},
  title: String,
  isVideo: Boolean,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Upload', uploadSchema);