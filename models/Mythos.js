const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Mythos extends Model {}


Mythos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        category_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        god_names: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        information: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mythos',
      }
);

module.exports = Mythos;
