const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');
const cartController = require('../controllers/cart');
const registrationsController = require('../controllers/registrations');
const sessionsController = require('../controllers/sessions');

console.log('routes.js');
router.get('/products', productsController.getProducts);
router.post('/cart', cartController.postProductToCart);
router.post('/registrations', registrationsController.postUser);
router.post('/sessions', sessionsController.postUserSession);

module.exports = router;
