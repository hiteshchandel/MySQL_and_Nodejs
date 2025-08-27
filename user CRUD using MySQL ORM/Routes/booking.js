const booking = require('../controllers/booking');
const express = require('express');
const router = express.Router();

router.post('/booking', booking.createBooking);

module.exports = router;
