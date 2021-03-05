const express = require('express')
const routes = require('./routes')

//Importar a conexão
require('./database')


const app = express();
app.use(express.json());
app.use(routes)


app.listen(3333, () => {
    console.log('Ola mundo')
})