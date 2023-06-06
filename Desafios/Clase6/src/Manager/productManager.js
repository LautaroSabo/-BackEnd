import fs from 'fs';

const path = './src/Files/BD.json';

export default class productManager {

    getProducts = async (limit) => {
        // if (fs.existsSync(path)) {
        //     const data = await fs.promises.readFile(path, 'utf-8');
        //     const products = JSON.parse(data);
        //     return products;
        // } else {
        //     return [];
        // }
        const productsData = await fs.promises.readFile(path, 'utf-8');
        const products = JSON.parse(productsData);

        if (!isNaN(limit)) {
            return products.slice(0, limit);
        } else {
            return products;
        }
    }

    addProduct = async (product) => {
        const products = await this.getProducts()

        if (products.length === 0) {
            product.id = 1
            product.code = '0001'
        } else {
            product.id = products[products.length - 1].id + 1
            const lastCode = products[products.length - 1].code;
            const codeNumber = parseInt(lastCode) + 1;
            product.code = codeNumber.toString().padStart(4, '0');
        }
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
        return product
    }

    getProductId = async (id) => {
        const products = await this.getProducts()
        const product = products.filter((product) => {
            return product.id == id;
        })
        return product
    }







}
