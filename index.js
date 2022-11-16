const express = require ('express');
const routerApi = require('./routes');
const app = express ();
const port = 3000;

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler'); 

app.use(express.json());

routerApi (app);



app.use(logErrors); // los middlewares de errores después desde el routerApi, donde se usan. Y es importante ver cual de los dos middleware se ejecuta primero. El orden importa.
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
    console.log('Mi port ' + port);
});
