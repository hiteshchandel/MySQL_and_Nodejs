const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Bus = sequelize.define('Bus', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'buses',
    timestamps: false
})

module.exports = Bus;