class Product{
    static count = 1;
    constructor(title, discription){
        this.title = title || '';
        this.discription = discription || '';
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