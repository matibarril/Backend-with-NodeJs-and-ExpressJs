const express = require('express');
const homeRouter = require('./homeRouter');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRoter = require('./categoriesRouter');
const ordersRouter = require('./ordersRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/', homeRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRoter);
  router.use('/orders', ordersRouter);
}


module.exports = routerApi;
