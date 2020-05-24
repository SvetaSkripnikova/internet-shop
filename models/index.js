class Category{
    static count = 1;
    constructor(name){
        this.id = Category.count++;
        this.name = name;
    }
}
exports.Category = Category;

class Product{
    static count = 1;
    constructor(title, discription, img, price, category){
        this.title = title || '';
        this.discription = discription || '';
        this.img = img || '';
        this.price = price || '';
        this.category = category || null;
        this.id = Product.count++;
    }
}
exports.Product = Product;

exports.MainViewModel = class{
    constructor(title, products, categories, editItem){
        this.title = title || '';
        this.products = products || [];
        this.categories = categories || [];
        this.editItem = editItem || null;
    }
}