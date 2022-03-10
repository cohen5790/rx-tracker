const RxList = require('../../models/RxList');
const Medication = require('../models/RxSchedule.js'); 

module.exports = {
    create,
    addRxToList,
}

async function create(req, res) {

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