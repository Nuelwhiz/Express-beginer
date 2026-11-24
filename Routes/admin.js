const express = require('express');
const router = express.Router();
const path = require('path');
//const rootDir = require('../utils/path');
const adminController = require('../controllers/admin');



router.get('/add-product', adminController.addProduct);

router.post('/add-product', adminController.postAddProduct);


router.use('/products', adminController.getProduct);


router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
//exports.products = products;
