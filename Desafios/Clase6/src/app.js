import express from 'express';
import productManager from './Manager/productManager.js';
import fs from 'fs'

const PORT = 8080;

const ProductManager = new productManager()
const app = express()
const path = './src/Files/BD.json'

app.use(express.urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log(`Servidor funcionando en el puerto ${8080}`);
})


app.get('/products',async (req,res)=>{
    // const cant = req.query.cant
    // const product = await ProductManager.getProducts(cant)
    // res.send(product)
    try {
        
        const limit = parseInt(req.query.limit);
        //git console.log(limit);
        const products = await ProductManager.getProducts(limit);
        res.json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los productos' });
      }
})

app.get('/newproduct', async(req,res)=>{
    const {tittle,price,thumbnail,code,stock} = req.query

    if(!tittle || !price || ! thumbnail || !stock ){
        res.send('Faltan Datos');
        return
    }
    const product = {
        tittle,price,thumbnail,stock
    }
    const msg = await ProductManager.addProduct(product);
    res.send(msg)   
})

app.get('/product/:pid',async (req,res)=>{
    const id = req.params.pid;
    const product = await ProductManager.getProductId(id);
    res.send(product);
})