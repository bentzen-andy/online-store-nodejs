const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");
console.log("routes.js");
router.get("/products", productsController.getProducts);

module.exports = router;
