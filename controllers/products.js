const Product = require('../models/Product');

exports.getProducts = (req, res, next) => {
  console.log('exports.getProducts');
  Product.fetchAll()
    .then((products) => {
      res.json({ products: products });
    })
    .catch((err) => console.log(err));
};
