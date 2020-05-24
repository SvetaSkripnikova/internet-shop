var cart = {};
const {MainViewModel} = require('../models/index');
const db = require('../utils/sqlitedb');

//db.getProducts();
db.getProducts().then(product =>{
    db.getCategories().then(categoties =>{
        let model = new MainViewModel('Products', product, categoties);
        return model;
    }) 
}); 
    checkCart();
    //console.log(cart);
    showCart();
    function showCart(){
        var out='';
        for(var key in cart){
            out+= key + '<br>';
        }
        $('#my-cart').html(out);
    }


function checkCart(){
    //проверяем наличие корзины в localstorage
    if (localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }

}
   