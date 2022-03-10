const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RxListSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    RxListItems: [] //embed
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });





  module.exports = mongoose.model('RxList', Schema);