const {User, Medication} = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
    deleteRx, 
}

async function deleteRx(req, res) {
    const user = await User.findById(req.user._id)
    console.log(user)
    user.RxList.pop(req.body)
    const updatedUser = await user.save()
    const token = jwt.sign({updatedUser}, process.env.SECRET, { expiresIn: '24h' })
    res.status(200).json(token)
}