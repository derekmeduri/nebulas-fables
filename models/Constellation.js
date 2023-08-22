const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Constellation extends Model {}


Constellation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        constellation_name: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'constellation',
      }
);

module.exports = Constellation;
