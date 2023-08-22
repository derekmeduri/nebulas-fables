const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Facts extends Model {}


Facts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fact_season: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        fact_name: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        fact_visibility: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        //ref constellation.
        constellation_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'constellation',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'facts',
      }
);

module.exports = Facts;
