const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
  name: String,
  dose: Number,
  perDiem: {
      type: Number,
      min: 1,
      max: 8,
  },
  timestamps: true,
});

const RxListSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    RxListItems: [medicationSchema]
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });





  module.exports = mongoose.model('RxList', RxListSchema);