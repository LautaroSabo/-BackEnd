class ProductManager{
    constructor(){
        this.productos = []
    }

    getProduct(){
        return this.productos
    }

    addproduct(title,description,thumbnail,price,code,stock){

        let id_Productos = (this.getProduct()).length

        let producto = {
            title : title,
            description: description,
            thumbnail: thumbnail,
            price: price,
            code:code,
            stock:stock,
            id: ++id_Productos
        }
        if(!producto.title ||!producto.description ||!producto.thumbnail ||!producto.price ||!producto.code ||!producto.stock){
            return console.log("Debe Ingresar Toda la Información")
        }if(code === this.productos.code){
            return console.log(`El código usado ya existe ${producto.code}`)
        }else return console.log("Se subió el producto ",this.productos.push(producto))

    }

    
    
    getProductById(){

    }
}

const productManager = new ProductManager()

let Productoss = productManager.addproduct("Arroz","Descripcion","foto",30,001,10);
let Productoss2 = productManager.addproduct("Arroz2","Descripcion2","foto2",302,002,12)
let Productoss3 = productManager.addproduct("Manteca","Descripcion2","foto2",15,003,40)
let Productoss4 = productManager.addproduct("Manteca","Descripcion2","foto2",15,003,40)

console.log(Productoss,Productoss2,Productoss3,Productoss4)
console.log(productManager.getProduct())
//console.log(this.productos)