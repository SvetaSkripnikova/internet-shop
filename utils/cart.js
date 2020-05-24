var cart = {};
checkCart();

$.getJSON('Product.json', function(data){
    var products = data;
    checkCart();
    console.log(cart);
    showCart();

$('.tocart').on('click', showCart);

function showCart(){
    if($.isEmptyObject(cart)){
        var out = 'Ваша корзина пуста';
        var sum = '0';
        var count = 0;
        $('#my-cart').html(out);
        $('#my-sum').html(sum);
        $('#easynetshop-cart-count').html(count);
    }
    else{
        var sum=0;
        var count=0;
        var out = '';
        for(var key in cart){
            key--;
            out +='<button class="delete" data-at="'+key+'">x</button>';
            out +='<img src="'+products[key].img+'" width="48">';
            out += products[key].title;
            var price = products[key].price;

            key++;
            out += '<button class="minus" data-at="'+key+'">-</button>';
            out += cart[key];
            count+=cart[key];
            out += '<button class="plus" data-at="'+key+'">+</button>';
            out += cart[key] * price;
            sum+=cart[key] * price;
            out += '<br>';
        }

        $('#my-cart').html(out);
        $('#my-sum').html(sum);
        $('#easynetshop-cart-count').html(count);
        $('.plus').on('click', plusProducts);
        $('.minus').on('click', minusProducts);
        $('.delete').on('click', deleteProducts);
    }
}

    function plusProducts(){
        var articul = $(this).attr('data-at');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }

    function minusProducts(){
        var articul = $(this).attr('data-at');
        if(cart[articul]>1){
            cart[articul]--;
        } 
        else{
            delete cart[articul];
        } 
        saveCartToLS();
        showCart();
    }

    function deleteProducts(){
        var articul = $(this).attr('data-at');
        articul++;
        delete cart[articul];
        saveCartToLS();
        showCart();
    }

});


function checkCart(){
    //проверяем наличие корзины в localstorage
    if (localStorage.getItem('cart')!=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }

}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

   