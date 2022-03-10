const Medication = require('../models/Medication.js'); 

module.exports = {
    index,
}

async function index(req, res) {
   const meds = await Medication.find({}).exec();
   res.json(meds);
}



