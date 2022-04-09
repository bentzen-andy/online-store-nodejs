const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');
const registrationController = require('../controllers/registration');
const loginController = require('../controllers/login');

console.log('routes.js');
router.get('/products', productsController.getProducts);
router.post('/registration', registrationController.postUser);
router.post('/login', loginController.postLogin);

router.post('/cart', cartController.postProductToCart);

module.exports = router;
