const express = require('express');
const router = express.Router();
const path = require('path');
//const rootDir = require('../utils/path');
const adminController = require('../controllers/admin');



router.use('/add-product', adminController.addProduct);


router.use('/products', adminController.getProduct);


router.post('/product', adminController.postAddProduct); 

module.exports = router;
//exports.products = products;
