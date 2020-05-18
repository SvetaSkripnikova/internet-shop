const {MainViewModel} = require('../models/index');
const db = require('../utils/sqlitedb');

module.exports = (r,q) => {
    db.getProducts().then(product =>{
        db.getCategories().then(categoties =>{
            let model = new MainViewModel('Products', product, categoties);
            q.render('index', model);
        })
        
    });
   
}