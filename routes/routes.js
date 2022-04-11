const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');
const registrationController = require('../controllers/registration');
const loginController = require('../controllers/login');

console.log('routes.js');
router.get('/products', productsController.getProducts);
router.post('/registration', registrationController.postUser);
router.post('/login', loginController.postLogin);
router.post('/login/check-username', auth, loginController.postCheckUsername);
router.post('/add-to-cart', auth, cartController.postProductToCart);
router.post('/cart', auth, cartController.postCart);

module.exports = router;
