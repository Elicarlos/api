const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

// Faz conexão
const connection = new Sequelize(dbConfig)

module.exports = connection;