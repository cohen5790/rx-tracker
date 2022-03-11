const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicationSchema = new Schema({
  name: String,
  dosage: String,
  perdiem: {
      type: Number,
      min: 1,
      max: 8,
  }
}, {
  timestamps: true,
});

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true, 
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  RxList: [medicationSchema]
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

const User = mongoose.model('User', userSchema)
const Medication = mongoose.model('Medication', medicationSchema)


module.exports = {
  User,
  Medication
}