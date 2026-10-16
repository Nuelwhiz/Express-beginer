
    const products = [];

exports.addProduct = (req, res, next)=>{
    res.render('add-product', 
        {
            pageTitle: "Add Product", 
            path: "/admin/add-product",
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        }
        );
}

exports.postAddProduct = (req, res, next)=>{
   // console.log(req.body); 
   products.push({title: req.body.title});
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{
    //const products = adminRoutes.products;
    res.render('shop', 
        {
             prods: products,
              pageTitle: 'Shop',
               path: '/',
                hasProducts: products.length > 0 ,
                 productCSS: true,
                  activeShop: true
            }
    );
    // console.log("in the middleware"); 
    //console.log(adminRoutes.products);
   // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
}