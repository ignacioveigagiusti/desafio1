const ProductManager = require('./productManager.js')

const PM = new ProductManager();

(async () => {
    // Empty get
    let emptyGet = await PM.getProducts();
    console.log(emptyGet);
    // Adding test product 
    let testProduct = {
        title: 'producto prueba',
        description:'Este es un producto prueba',
        price:200,
        thumbnail:'Sin imagen',
        code:'abc123',
        stock:25
    };
    PM.addProduct(testProduct);

    // Get all products
    let secondGet = await PM.getProducts();
    console.log(secondGet);

    // Try to get certain id's
    let get_1 = await PM.getProductById(1);
    let get_15 = await PM.getProductById(15);
    console.log(get_1);
    console.log(get_15);    

    // Repeated code error
    PM.addProduct(testProduct);
})()