const fs = require('fs');
const path = require('path');                 // 1. Added missing path import
const rootDir = require('../utils/path'); 

 const p = path.join(rootDir, 'data', 'products.json');

const productFormData = cb =>{
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return cb([]); // Return empty array if file doesn't exist yet
            }
            cb(JSON.parse(fileContent));
        });
    
}
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    //save
    save() {
       productFormData(products =>{
products.push(this)
fs.writeFile(p, JSON.stringify(products), (err)=>{
    console.log(err);
    
})
       })

          }

    static fetchAll(cb) {
        productFormData(cb)
       }
    
    }