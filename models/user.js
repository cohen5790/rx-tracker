const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

// userSchema.pre('save', function(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
//     if (err) return next(err);
//     user.password = hash;
//     return next();
//   });
// });

module.exports = mongoose.model('User', userSchema);