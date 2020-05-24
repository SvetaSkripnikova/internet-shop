const {MainViewModel} = require('../models/index');
const db = require('../utils/sqlitedb');
let model;
module.exports = (r,q) => {
    db.getProducts().then(product =>{
        db.getCategories().then(categoties =>{
            model = new MainViewModel('Products', product, categoties);
            q.render('index', model);
        })
        
    });
   
}