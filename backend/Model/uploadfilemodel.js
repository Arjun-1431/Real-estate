var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Agreement: String,
  Registry: String,
  Booking: String,
  Loanapplication: String,
  Identification: String,
  Residence: String,
  BankAccountStatement: String,
  Signature: String,
  PropertDetails: String,
});

var galleries = mongoose.model('documents', userSchema);
module.exports = galleries;
