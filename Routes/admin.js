const express = require('express');
const router = express.Router();
const path = require('path');
//const rootDir = require('../utils/path');
const productsController = require('../controllers/products');



router.use('/add-product', productsController.addProduct);

router.post('/product', productsController.postAddProduct); 

module.exports = router;
//exports.products = products;
