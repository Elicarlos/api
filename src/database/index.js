const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

//Apos criar o models 
const User = require ('../models/Users')
const Address = require('../models/Address')

// Faz conexão
const connection = new Sequelize(dbConfig)
Address.init(connection)
User.init(connection)

Address.associate(connection.models)

module.exports = connection;