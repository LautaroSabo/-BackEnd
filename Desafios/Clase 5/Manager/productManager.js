import  fs  from 'fs';

const path = './Desafios/Clase 5/Manager/productManager.js'

export default class ProductManager{

    consultarProductos = async()=>{
        
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf8')
            const productos = JSON.parse(data)
            console.log("No esta")
            return productos
        }else{
            console.log("AQUI")
            return []
        }
    }

    addProduct = async () =>{
        await fs.promises.whiteFile('')
    }

    getProducts(){

    }

    getProductById(){

    }

    updateProduct(){

    }

    delteProduct(){

    }
} 

const prueba1 = new ProductManager()

console.log(prueba1.consultarProductos())
