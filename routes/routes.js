const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const productsController = require('../controllers/products');
const registrationController = require('../controllers/registration');
const loginController = require('../controllers/login');
const ordersController = require('../controllers/orders');

router.get('/products', productsController.getProducts);
router.post('/registration', registrationController.postUser);
router.post('/login', loginController.postLogin);
router.post('/login/check-username', auth, loginController.postCheckUsername);
router.post('/order', auth, ordersController.postOrder);

module.exports = router;
