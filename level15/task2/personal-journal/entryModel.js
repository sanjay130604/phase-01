const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: [String] 
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
