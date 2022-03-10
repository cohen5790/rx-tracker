const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    listItems: []
  }, {
    timestamps: true,
    toJSON: { virtuals: true }
  });



listSchema.methods.addMedtoList = async function (itemId) {
    const list = this;
    const listItem = list.listItems.find(listItem => listItem.item._id.equals(itemId));
    const item = await mongoose.model('Item').findById(itemId);
    list.listItems.push({ item });
    return list.save();
  };