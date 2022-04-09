const Product = require('../models/Product');

exports.getProducts = async (req, res, next) => {
  try {
    let products = await Product.find();
    res.json({ products: products });
  } catch (err) {
    console.log(err);
  }
};
