const Bus = require('../models/Bus');
const { Op } = require('sequelize');

exports.createBus = async (req, res) => {
    try {
        const bus = await Bus.create(req.body);
        res.status(201).json(bus);
    } catch (error) {
        console.log('Error creating bus:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

exports.getAllBusesForAvailableSeats = async (req, res) => {
    try {
        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gte]: req.params.seats
                }
            }
        });
        res.status(200).json(buses);
    } catch (error) {
        console.log('Error fetching buses:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

