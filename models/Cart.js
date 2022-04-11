const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  owner: { type: String, unique: true },
  products: { type: [String], default: [] },
});

module.exports = mongoose.model('cart', cartSchema);
