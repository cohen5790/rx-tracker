const Medication = require('../models/medication.js'); 

module.exports = {
    index,
}

async function index(req, res) {
   const meds = await Medication.find({}).exec();
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

