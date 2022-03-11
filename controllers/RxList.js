const {User, Medication} = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
    createRx, 
    deleteRx
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

async function deleteRx(req, res) {
    const userDelete = await User.findById(req.user._id)
    console.log(user)
    user.RxList.pop(req.body)
    const updatedUser = await user.save()
    const tokenDelete = jwt.sign({updatedUser}, process.env.SECRET, { expiresIn: '24h' })
    res.status(200).json(tokenDelete)
}


