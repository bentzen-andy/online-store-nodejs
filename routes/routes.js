const express = require('express');

const router = express.Router();
router.use();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');

console.log('routes.js');
router.get('/products', productsController.getProducts);
router.post('/cart', cartController.postProductToCart);

module.exports = router;
