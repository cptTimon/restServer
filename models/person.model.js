const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  fullName: { type: String, required: true }
});

module.exports = mongoose.model('Person', personSchema);