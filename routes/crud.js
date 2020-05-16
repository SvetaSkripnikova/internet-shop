const {MainViewModel}=require('../models');
let db=require('../utils/localStorage');

exports.get=(r,q)=>{
    var item = db.getProducts(+r.params.id);
    if(item){
        let model = new MainViewModel('Products'
                                        , db.getProducts()
                                        , item);
        return q.render('index', model);
    }
    q.redirect('/');
};

exports.add = (r,q)=>{
    db.addProduct(r.body);
    q.redirect('/');
};

exports.update = (r,q)=>{
    r.body.id=+r.body.id;
    db.updateProduct(r.body);
    q.redirect('/');
};

exports.delete = (r,q)=>{
    db.removeProduct(+r.params.id);
    q.redirect('/');
};