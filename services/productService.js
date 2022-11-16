const faker = require('faker');

const boom = require ('@hapi/boom');


class ProductsService {

    constructor () {
        this.products = [];
        this.generate ();
    }

    generate () {
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean(),
        });
        }
    }

    async create(data) {

        const newProduct = {
            id: faker.datatype.uuid(),
            ...data   // agrega el resto de los datos que introduce el usuario, el name, price e imagen, pero nosotros generamos el uuid.
        }
        this.products.push(newProduct);
        return (newProduct);

    }

    async find () {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(this.products);
            },1000);
        })
    }
    

    async findOne (id) {
        const product = this.products.find(item => item.id ===id); // Es como el metodo filter
        if (!product) {
            throw boom.notFound('product not found');
        }
        if (product.isBlock){
            throw boom.conflict('Product is block');
        }
        return product;
    }

    async update (id, changes) {
        const index = this.products.findIndex(item => item.id ===id); // Es como el metodo filter pero queremos saber en que posición esta para después actualizarlo
        if (index === -1) {
            throw boom.notFound('Product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete (id) {
        const index = this.products.findIndex(item => item.id ===id); 
        if (index === -1) {
            throw boom.notFound('product not found');
        }
        this.products.splice (index, 1);
        return id;

    }

    
}

module.exports = ProductsService;
