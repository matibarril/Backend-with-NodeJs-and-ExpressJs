function logErrors (err, req, res, next) {
    console.error(err);
    next(err);
}

function boomErrorHandler (err, req, res, next) {
    if (err.isBoom) {
        const {output} = err;
        res.status(output.statuscode).json(output.payload);
    }
    next(err);
}

function errorHandler (err, req, res, next) {
    console.log('errorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
}


module.exports = {logErrors, errorHandler, boomErrorHandler}