import productsManager from "./manager/productsManager.js";

const manager = new productsManager();

const env = async () =>{

    let product = {
        
        title: "Salada",
        price: "10",
        thumbnail: "IMG",
        code: "00002",
        stock: "35"
    }


    let result = await manager.addProducts(product)
    //console.log(result)

    let products = await  manager.getProducts()
    //console.log(products)

    let idProduct = await manager.getProductsById()
    //console.log(idProduct)

    let deleteProduct = await manager.deleteProduct()
    //console.log(deleteProduct)

    let updateProduct = await manager.updateProducts()
    //esto me trabo por mucho tiempo :(
}

env()