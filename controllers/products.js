const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
  console.log('exports.getProducts');
  console.log('Product');
  console.log(Product);
  Product.find()
    .then((products) => res.json({ products: products }))
    .catch((err) => console.log(err));
};
