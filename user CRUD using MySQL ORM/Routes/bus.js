const express = require('express');
const { createBus, getAllBusesForAvailableSeats } = require('../controllers/bus');
const Routes = express.Router();

Routes.post('/buses', createBus);
Routes.get('/buses/available/:seats ', getAllBusesForAvailableSeats);


module.exports = Routes;
