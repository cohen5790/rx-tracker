const MedicationModel = require('../models/medication.js'); 

module.exports = {
    index,
    create
}

async function index(req, res) {
   const meds = await Medications.find({}).sort('name').exec();
   res.json(meds);
 }

// async function create(req, res) {
//   try {
//     await MedicationModel.create({ req.body })
//     res.status(200).json('medication added to your rxList')
//  } catch(err) {
//     res.json(err);
//  }
// }

// async function addToCart(req, res) {
//    const cart = await Order.getCart(req.user._id);
//    await cart.addItemToCart(req.params.id); 
//    res.json(cart);
//  }