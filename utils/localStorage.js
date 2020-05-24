const { Product } = require('../models');

let products = [
    new Product('Title1'),
];

let db={
    getProducts: id => {
        if (!id) return products;
        let item = products.filter(x=>x.id===id)[0];
        return item || null;
    },
    addProduct: x=>{
        x.id=Product.count++;
        products.push(x);
    },
    updateProduct: x=>{
        let item=products.filter(y=>y.id===x.id)[0];
        if(item){
            item.title=x.title;
           // item.discription=x.discription;
            //item.img=x.img;
            //item.price=x.price;
        }
    },
    removeProduct: id=>{
        let item=products.filter(x=>x.id===id)[0];
        if (item){
            index=products.indexOf(item);
            products.splice(index,1);
        }
    }
}





