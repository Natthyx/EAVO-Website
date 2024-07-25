const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Program', ProgramSchema);
