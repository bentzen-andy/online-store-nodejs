const Product = require('../models/Product');

exports.postProductToCart = (req, res, next) => {
  console.log('exports.postProductToCart');
  console.log(req.body);

  // TODO: implement all this commented out code.
  // find product by ID
  // Product.findById(req.body.sku)
  //   .then((product) => {
  //     // add the product to the cart
  //     Cart.addProduct(product);
  //     res.json({ status: 'success' });
  //   })
  //   .catch((err) => res.json({ status: err }));
};
