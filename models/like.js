const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  upload: {
    type: Schema.Types.ObjectId,
    ref: 'Upload',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Like', likeSchema);