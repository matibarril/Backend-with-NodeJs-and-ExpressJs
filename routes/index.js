const express = require('express');
const homeRouter = require('./homeRouter');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRuoter = require('./categoriesRouter');
const ordersRouter = require('./ordersRouter');
const customersRouter = require('./customersRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/', homeRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRuoter);
  router.use('/orders', ordersRouter);
  router.use('/customers', customersRouter);
}


module.exports = routerApi;
