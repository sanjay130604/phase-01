const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
