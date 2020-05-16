class Product{
    static count = 1;
    constructor(title, discription, img, price){
        this.title = title || '';
        this.discription = discription || '';
        this.img = img || '';
        this.price = price || '';
        this.id = Product.count++;
    }
}
exports.Product = Product;

exports.MainViewModel = class{
    constructor(title, products, editItem){
        this.title = title || '';
        this.products = products || [];
        this.editItem = editItem || null;
    }
}