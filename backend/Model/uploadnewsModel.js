const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  heading: String,
  images: String,
  newsdiscription: String,
  date:Date,
  Link:String

})

module.exports = mongoose.model('uploadnews', userSchema);
