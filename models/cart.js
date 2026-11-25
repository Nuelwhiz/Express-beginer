
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {

  static addProduct(id, productPrice) {

    console.log('ADD PRODUCT CALLED:', id, productPrice);
    console.log('CART FILE PATH:', p);

    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        try {
          cart = JSON.parse(fileContent);
        } catch (parseError) {
          console.log('CART JSON ERROR:', parseError);
          return;
        }
      } else if (err.code !== 'ENOENT') {
        console.log('CART READ ERROR:', err);
        return;
      }

      // Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );

      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;

        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;

      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + Number(productPrice);

      // Save updated cart
      fs.writeFile(p, JSON.stringify(cart), err => {
        if (err) {
          console.log('CART SAVE ERROR:', err);
        } else {
          console.log('CART SAVED SUCCESSFULLY:', JSON.stringify(cart));
        }
      });

    });
  }

  static deleteProduct(id, productPrice) {

    console.log('DELETE PRODUCT CALLED:', id, productPrice);

    fs.readFile(p, (err, fileContent) => {

      if (err) {
        console.log('CART READ ERROR:', err);
        return;
      }

      let cart;

      try {
        cart = JSON.parse(fileContent);
      } catch (parseError) {
        console.log('CART JSON ERROR:', parseError);
        return;
      }

      const updatedCart = { ...cart };

      const productIndex = updatedCart.products.findIndex(
        prod => prod.id === id
      );

      if (productIndex >= 0) {
        const product = updatedCart.products[productIndex];

        updatedCart.totalPrice -= Number(productPrice) * product.qty;

        updatedCart.products = updatedCart.products.filter(
          prod => prod.id !== id
        );

        console.log('PRODUCT REMOVED FROM CART:', id);
      } else {
        console.log('PRODUCT NOT FOUND IN CART:', id);
      }

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        if (err) {
          console.log('CART DELETE SAVE ERROR:', err);
        } else {
          console.log('UPDATED CART SAVED:', JSON.stringify(updatedCart));
        }
      });

    });
  }

  static getCart(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb(null);
      } else {
        try {
          const cart = JSON.parse(fileContent);
          cb(cart);
        } catch (parseError) {
          console.log('CART JSON ERROR:', parseError);
          cb(null);
        }
      }
    });
  }
};
