const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isMain: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Event', EventSchema);
