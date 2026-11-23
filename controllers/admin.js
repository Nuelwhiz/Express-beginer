const Product = require('../models/product');

exports.addProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
    });
}



exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;

    const product = new Product(
        null,
        title,
        imageUrl,
        description,
        price
    );

    product.save();
    res.redirect('/');
};


//edit product
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect('/');
    }

    const productId = req.params.productId;
    Product.findId(productId, product => {

        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });
};

//post edit product
exports.postEditProduct = (req, res, next) => {
const productId = req.body.productId;

}
exports.getProduct = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products Page',
            path: '/admin/product'
        });
    });
};