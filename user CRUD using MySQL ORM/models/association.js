const sequelize = require('../db');
const User = require('./User');
const Bus = require('./Bus');
const Booking = require('./Booking');

User.hasMany(Booking, { foreignKey: 'userId', onDelete: 'CASCADE' });
Booking.belongsTo(User, { foreignKey: 'userId' });



Bus.hasMany(Booking, { foreignKey: 'busId', onDelete: 'CASCADE' });
Booking.belongsTo(Bus, { foreignKey: 'busId' });


module.exports = { sequelize, User, Bus, Booking };