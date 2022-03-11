const RxList = require('../models/user.js')

module.exports = {
    index,
}

async function index(req, res) {
   const meds = await RxList.find({}).exec();
   res.json(meds);
}



