const sqlite = require('sqlite3').verbose();
const path = 'products.db';

function connection(){
    return new sqlite.Database(path, err =>{
        if (err) console.error('Database connect. ', err.message);
        else console.log('Database is connected');
    });
}

exports.getProducts = function(id){
    return new Promise((resolve, reject)=>{
        let query = 'SELECT * FROM Product';
        let params = [];
        if (id) {
            query += ' WHERE ID = ?';
            params.push(id);
        }

        connection().all(query, params, (err, result) => {
            if (err) reject(err);
            else{
                if(id){
                    result=result[0]
                }
                resolve(result);
            }
        }).close();
    });
}

exports.addProduct = function(product){
    return new Promise((resolve, reject)=>{
        if (!product) {
            reject({message: 'product is empty'});
            return;
        }
        let query = `INSERT INTO Product (title)
                     VALUES(?)`;
        let params = [
            product.title || '',
            product.discription || '',
            product.img || '',
        ];

        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}

exports.updateProduct = function(product){
    return new Promise((resolve, reject)=>{
        if (!product.id) {
            reject({message: 'product is empty'});
            return;
        }
        let query = `UPDATE Product 
                     SET title = ?
                        , discription = ?
                        , img = ?
                     WHERE id = ?`;
        let params = [
            product.title || '',
            product.discription || '',
            product.img || '',
            product.id,
        ];
        console.log(params);
        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}

exports.deleteProduct = function(id){
    return new Promise((resolve, reject)=>{
        if (!id) {
            reject({message: 'id is empty'});
            return;
        }
        let query = `DELETE FROM Product WHERE ID = ?`;
        let params = [ id ];
        connection().run(query, params, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        }).close();
    });
}