const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, default: null, unique: true },
  slug: { type: String, default: null, unique: true },
  category: { type: String },
  image_url: { type: String },
  description: { type: String },
  notes: { type: String },
  number_in_stock: { type: Number },
  price: { type: Number },
});

module.exports = mongoose.model('product', productSchema);
