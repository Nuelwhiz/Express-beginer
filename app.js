
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next)=>{
   // console.log("in the middleware"); 
    res.send('<form action="/product" method="post"><input type="text" name="product" placeholder="Product Name"><button type="submit">Add Product</button></form>');
     //it allow the request to continue to the next middleware
});

app.post('/product', (req, res, next)=>{
    console.log(req.body); 
    res.redirect('/');
});

app.use('/', (req, res, next)=>{
    // console.log("in the middleware"); 
    res.send('<h1>Hello from Express</h1>');
});



 app.listen(3000);