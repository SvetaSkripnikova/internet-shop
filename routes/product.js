const {MainViewModel} = require('../models/index');
const db = require('../utils/sqlitedb');

module.exports = (r,q) => {
    
    db.getProducts().then(product =>{
        let model = new MainViewModel('Products', product);
        q.render('product',  model);
    });
   
}

