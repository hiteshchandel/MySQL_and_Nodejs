const booking = require('../controllers/booking');
const express = require('express');
const router = express.Router();

router.post('/booking', booking.createBooking);
router.get('/users/:id/bookings', booking.getAllBookings);
router.get('/buses/:id/bookings', booking.getAllBookingBuses);

module.exports = router;
