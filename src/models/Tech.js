const {Model, DataTypes} = require ('sequelize')


class Tech extends Model {
    static(connection){
        super.init({
            name: DataTypes.S
        },{
            sequelize: connection
        })
    }

}