
const path = require('path');

const express = require('express');
const adminRoutes = require('./admin');
const router = express.Router();



router.get('/', (req, res, next)=>{
    const products = adminRoutes.products;
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0 , productCSS: true, activeShop: true});
    // console.log("in the middleware"); 
    //console.log(adminRoutes.products);
   // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;