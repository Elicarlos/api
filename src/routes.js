const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: "Ola nundo"});
})

routes.get('/produtos', (req, res) => {
    return res.json({ descricao: "Camisa polo"})
})


module.exports = routes;