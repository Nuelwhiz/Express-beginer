const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
    const products = [];


router.use('/add-product', (req, res, next)=>{


    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req, res, next)=>{
   // console.log(req.body); 
   products.push({shopProduct: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
