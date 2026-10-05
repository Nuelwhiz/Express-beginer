const express = require('express');
const router = express.Router();

router.use('/add-product', (req, res, next)=>{
   // console.log("in the middleware"); 
    res.send('<form action="/admin/product" method="post"><input type="text" name="product" placeholder="Product Name"><button type="submit">Add Product</button></form>');
    
});

router.post('/product', (req, res, next)=>{
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router;