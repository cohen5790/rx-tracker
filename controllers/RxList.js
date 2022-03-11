const {User, Medication} = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
    createRx,
    // index   
}

async function createRx(req, res) {
    
    const user = await User.findById(req.user._id)
    console.log(user)
    user.RxList.push(req.body)
    const updatedUser = await user.save()
    console.log(updatedUser)
    const token = jwt.sign({updatedUser}, process.env.SECRET, { expiresIn: '24h' })
    res.status(200).json(token)
    
}  

// async function index(req, res) {
//     const rxList = await RxList.find({user: req.user._id}).exec();
//     res.json(rxList);
// }