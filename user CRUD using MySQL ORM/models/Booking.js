const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // busId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'bookings',
    timestamps: false
})

module.exports = Booking;