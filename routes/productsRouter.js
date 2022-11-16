const express = require('express');

const ProductsService = require ('./../services/productService'); // llamo a la clase que es el sercivio de Services/productservice

const validatorHandler = require ('./../middlewares/validatorHandler');
const {createProductSchema, updateProductSchema, getProductSchema} = require ('./../schemas/productSchema');

const productsService = new ProductsService(); // instancia de la clase. Es inicializada, el new ejecuta el constructor de la clase. Acá sería el this.product y el this.generete.

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await productsService.find();
   // const { size } = req.query;
    res.json(products);
    ;
});

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter')
});

router.get('/:id',  
validatorHandler(getProductSchema, 'params'), // ejecuta este middleware, si esta todo bien sigue al siguiente.
async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productsService.findOne(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.post('/', 
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
    const body = req.body;
    const newProduct = await productsService.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', 
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),

async (req, res,next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await productsService.update (id, body);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await productsService.delete(id);
    res.json(rta);
});

module.exports = router;