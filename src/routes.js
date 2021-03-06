const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController')
const AddressController =  require('./controllers/AddressController')




// Listar todos
routes.get('/users', UserController.index)
// Rota para cadastro de usuarios
routes.post('/users', UserController.store)

//Encandeamento de rotas 
routes.get('/users/:user_id/address', AddressController.index)
routes.post('/users/:user_id/address', AddressController.store)



routes.get('/', (req, res) => {
    return res.json({ hello: "Ola nundo"});
})

routes.get('/produtos', (req, res) => {
    return res.json({ descricao: "Camisa polo"})
})


module.exports = routes;