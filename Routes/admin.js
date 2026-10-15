const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const productsController = require('../controllers/products');
    const products = [];


router.use('/add-product', productsController.addProduct);

router.post('/product', (req, res, next)=>{
   // console.log(req.body); 
   products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
