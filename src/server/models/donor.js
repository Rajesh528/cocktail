// backend/models/Donor.js
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  donations: { type: Number, default: 0 },
});

module.exports = mongoose.model('Donor', donorSchema);
