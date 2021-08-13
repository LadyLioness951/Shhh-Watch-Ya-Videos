const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
  following: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  follower: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Follow', followSchema);