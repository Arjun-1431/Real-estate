const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  flatno: String,
  mobileno: String,
  service:String
})

module.exports = mongoose.model('Queries', userSchema);
