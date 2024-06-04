const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  flatlocation: String,
  pricing: String,
  rating: Number,
  sqtfoot: Number,
  bedroom: Number,
  beds: Number,
  imagesq: String,
  personId:String,
  name:String,
  email:String,
  conte:String
 

})

module.exports = mongoose.model('uploadflats', userSchema);
