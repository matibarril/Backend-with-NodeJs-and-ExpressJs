//const { uriTooLong } = require('@hapi/boom');
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
//Agregar despues de lo de imagen
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,

});

const getProductSchema = Joi.object({
    id : id.required(),

});

module.exports = {createProductSchema, updateProductSchema, getProductSchema}

