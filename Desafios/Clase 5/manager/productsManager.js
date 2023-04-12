import fs from 'fs'

const path = './files/productos.json'

export default class productsManager {

    getProducts= async()=>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8')
            const products = JSON.parse(data);
            return products;
        }else{
            return [];
        }
    }

    addProducts = async(product) =>{
        const products = await this.getProducts();
        if(products.length === 0){
            product.id = 1
        }else{
            product.id = products[products.length -1].id+1
        }
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(products,null,'\t'))
        return product
    }

    getProductsById = async(id)=>{
        const products = await this.getProducts()
        const idProduct = products.filter((idProduct)=>{
            return idProduct.id == id
        })
        return idProduct
    }

    
    deleteProduct = async(id)=>{
        const products = await this.getProducts();
        const deleteProduct = products.findIndex((deleteProduct)=>{
            return deleteProduct.id == id
        })
        products.splice(deleteProduct,1)
        try {
            await fs.promises.writeFile(path,JSON.stringify(products,null,'\t'))
            return 'Usuario Eliminado'
        } catch (error) {
            return error
        }
    }
    
    updateProducts = async()=>{
        const products = await this.getProducts();
        const updateProduct = products.findIndex((updateProduct)=>{
            return updateProduct.id == id
        })
        
    }
    
}