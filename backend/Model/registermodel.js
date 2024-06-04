const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contect: Number,
  isAdmin: { type: Boolean, default: false }, 
  personId:String,
  role:String,
})

module.exports = mongoose.model('register', userSchema);
