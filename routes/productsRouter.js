const express = require('express');
const ProductsService =  require('../services/productService');
const validatorHandler = require('../middlewares/validatorHandler');
const {  createProductSchema, updateProductSchema, getProductSchema, queryProductSchema } = require('../schemas/productSchema');


const router = express.Router();
const productsService = new ProductsService();

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try {
      const products = await productsService.find(req.query);
    res.json(products);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
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
  async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await productsService.create(body);
    res.status(201).json({data: newProduct});
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await productsService.update(id, body);
    res.json({product});
  } catch (error) {
      next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
  const resp = await productsService.delete(id);
  res.json({resp});
  } catch (error) {
    next(error)
  }
});

router.put('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
