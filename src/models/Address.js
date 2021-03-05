const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init( connection ){
    super.init({
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
    }, {
        sequelize: connection
    });
  }
    // Aqui ele pasa a ver todos os modulos da aplicação
    // devemos chamar este metodo no index do database
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
    }
}
module.exports = Address