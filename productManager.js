class ProductManager {
    constructor(){
        this.products = []
    }
    
    addProduct(prod) {
        try{
            const product = prod; 
            let indexArray = [];
            for (const i in this.products) {
                indexArray.push(this.products[i].id);
            }
            let newID = indexArray.length + 1;
            if (indexArray.length > 0) {
                indexArray = indexArray.sort((a,b) => a - b )
                for (let i = 0; i < indexArray.length; i++) {
                    if ((indexArray[i]-i) != 1){
                        newID = i+1;
                    }
                }
            }
            // Validación
            if( prod.title == undefined || prod.description == undefined || prod.price === null || prod.thumbnail == undefined || prod.code == undefined || prod.stock == null || prod.title == '' || prod.price === '' || prod.thumbnail == '' || prod.code == '' || prod.stock == '' ) {
                throw 'Missing data. Product needs Name, Price, Thumbnail, Category and Stock.'
            }
            // Rechazar si el código está repetido
            this.products.forEach(e => {
                if (e.code == prod.code){
                    throw 'Repeated code'
                }});
            const newProduct = {id: newID, ...product};
            this.products.push(newProduct);
            console.log('Succesfully added!');
        }
        catch(err){
            throw new Error(`Error: ${err}`)
        }
    }
    async getProductById(num) {
        try{
            if (this.products.find(e => e.id=num)){
                return this.products[num-1]
            } else {
                console.error('ID does not exist (...yet)')
                throw 'ID does not exist'
            }
        }
        catch(err){
            throw new Error(`Error: ${err}`)
        }
    }
    async getProducts() {
        try{
            return this.products
        }
        catch(err){
            throw new Error(`Error: ${err}`)
        }
    }
}

module.exports = ProductManager