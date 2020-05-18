const {MainViewModel}=require('../models');
let db=require('../utils/localStorage');

exports.get=(r,q)=>{
    var item = db.getProducts(+r.params.id);
    if(item){
        let model = new MainViewModel('Products'
                                        , db.getProducts()
                                        , db.getCategories()
                                        , item);
        return q.render('index', model);
    }
    q.redirect('/');
};

exports.add = (r,q)=>{
    r.body.category = db.getCategories(+r.body.category);
    db.addProduct(r.body);
    q.redirect('/');
};

exports.update = (r,q)=>{
    r.body.id=+r.body.id;
    r.body.category = db.getCategories(+r.body.category);
    db.updateProduct(r.body);
    q.redirect('/');
};

exports.delete = (r,q)=>{
    db.removeProduct(+r.params.id);
    q.redirect('/');
};