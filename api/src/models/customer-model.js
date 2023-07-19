const { Model, DataTypes } = require("sequelize");

class CustomerModel extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.TEXT,
            email: DataTypes.TEXT
        }, {
            sequelize,
            tableName: 'customer',
            timestamps: false
        });
    }
}

module.exports = { CustomerModel };
