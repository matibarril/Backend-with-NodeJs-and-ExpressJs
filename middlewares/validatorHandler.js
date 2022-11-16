const boom = require('@hapi/boom');

function validatorHandler (schema, property) {  //Una función que retorna otra función que es un middleware.
    return (req, res, next) => {       //propiedad de clousures de Javascript, hacemos un middleware de manera dinámica.
        const data = req[property]; // xq podria ser req.body, req.params, etc. 
        const {error} = schema.validate(data, {abortEarly: false});
        if (error){
            next(boom.badRequest(error));
        }
        next();
    }
}


module.exports = validatorHandler;