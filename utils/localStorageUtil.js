var cart = [];


$('document').ready(function(){
    checkCart();
    showMiniCart();
})

$('button.mmybtn_main').on('click', addToCart);

function addToCart(){
    //добавляем товар в корзину
    var pr = new Product();
    pr.id = $(this).attr('data-art');
    pr.title = $(this).attr('data-title');
    pr.img = $(this).attr('data-img');
    pr.price = $(this).attr('data-price');
    pr.category = $(this).attr('data-categ');
    if (cart[pr]!=undefined){
        cart[pr]++;
    }else{
        cart[pr] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    for(var w in cart){
        console.log(JSON.stringify(w));  
    }
    
    showMiniCart();
}

function checkCart(){
    //проверяем наличие корзины в localstorage
    if (localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

//}
//checkCart();
//showMiniCart();

function showMiniCart(){
    //показываю содержимое корзины
    var out='';
    for(var w in cart){
        out += w.id + '---' + cart[w] + '<button class="delete">x</button>';
    }
    $('#mini-cart').html(out);
}