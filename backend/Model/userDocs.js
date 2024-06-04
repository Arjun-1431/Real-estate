const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  objectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'SomeModel' // Replace with your actual model name if you have one
  },
  name: {
    type: String,
    required: true
  },
  doc: {
    type: String,
    required: true
  }
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
