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
        }

        let getCode = this.productos.find((prod)=> prod.code==producto.code)
        //console.log(getCode)
        if(getCode){
            return 'El codigo ya existe'
        }else{
            this.productos.push(producto)
            return this.productos
        }
        
    }

    
    
    getProductById(filtroId){
        let getId = this.productos.filter(Id =>Id.id === filtroId ).map(Id => Id.id)
        //console.log(getId)
        if(getId== 0){
            return 'Not Found'
        }
        if (getId == filtroId ){
            return `Se ha Encontrado el Id ${getId}  `
            
        }else{
            return 'Not Found'
        }
    }
}

const productManager = new ProductManager()

productManager.addproduct("Arroz","Descripcion","foto",30,001,5);
productManager.addproduct("Tomate","Descripcion2","foto2",15,002,12)
productManager.addproduct("Manteca","Descripcion3","foto3",15,003,40)
productManager.addproduct("Agua","Descripcion4","foto4",15,003,40) //Producto con CODE Repetido

//console.log(Productoss,Productoss2,Productoss3,Productoss4)
//console.log(Productoss)
console.log(productManager.getProductById(1))
