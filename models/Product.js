const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, default: null, unique: true },
  slug: { type: String, default: null, unique: true },
  category: { type: String },
  imageURL: { type: String },
  description: { type: String },
  notes: { type: String },
  numberInStock: { type: Number },
  price: { type: Number },
});

module.exports = mongoose.model('product', productSchema);
