var cart = [];


$('document').ready(function(){
    checkCart();
 //   showMiniCart();
})

$('button.mmybtn_main').on('click', addToCart);

function addToCart(){
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
   localStorage.setItem('cart', JSON.stringify(cart));
   console.log(cart); 
   var count = $('#easynetshop-cart-count').text();
   count++;
   $('#easynetshop-cart-count').html(count);

   // showMiniCart();
}

function checkCart(){
    //проверяем наличие корзины в localstorage
    if (localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}



function showMiniCart(){
    //показываю содержимое корзины
    var out='';
    for(var w in cart){
        out += w + '---' + cart[w] + '<br>';
    }
    $('#mini-cart').html(out);
}