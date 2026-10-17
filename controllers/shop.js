
 const Product = require('../models/product');
const path = require('../utils/path');

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products) =>{
res.render('shop/product-list', 
        {
             prods: products,
              pageTitle: 'all product',
               path: '/products',
               
            }
    );
    })
    
   
}

exports.getIndex = (req, res, next)=>{
   Product.fetchAll((products) =>{
res.render('shop/index', 
        {
             prods: products,
              pageTitle: 'Shop',
               path: '/',
            }
    );
    }) 
}


exports.getCart = (req, res, next) =>{
    res.render(
        'shop/cart', {
            path: '/cart',
            pageTitle: 'your cart page'
        }
    )
}

//checkout
exports.getCheckout = (req, res, next) => {
  res.render(
    'shop/checkout',
    {
path: '/checkout',
pageTitle: 'your checkout page'
    }
)  
}