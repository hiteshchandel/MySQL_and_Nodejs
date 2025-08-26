const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Booking = sequelize.define('Booking', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    busId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'bookings',
    timestamps: false
})

module.exports = Booking;