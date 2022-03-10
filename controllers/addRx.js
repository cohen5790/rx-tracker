const RxList = require('../../models/RxList');
const Medication = require('../models/Medication.js'); 

module.exports = {
    addRxToList,
}

async function addRxToList(req, res) {
    try {
      await Medication.create(req.body)
      res.status(200).json('medication added to your rxList')
   } catch(err) {
      res.json(err);
   }
  }

RxList.methods.addMedtoList = async function (itemId) {
    const list = this;
    const listItem = list.RxListItems.find(listItem => listItem.item._id.equals(itemId));
    const item = await mongoose.model('Medication').findById(itemId);
    list.RxListItems.push({ item });
    return list.save();
};