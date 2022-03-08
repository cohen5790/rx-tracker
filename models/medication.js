const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
    name: String,
    dose: Number,
    perDiem: {
        type: Number,
        min: 1,
        max: 8,
    },
    perWeek: {
        type: Number,
        min: 1,
        max: 7,
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Medication', medicationSchema);