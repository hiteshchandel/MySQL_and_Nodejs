const Booking = require('../models/Booking');
const User = require('../models/User');
const Bus = require('../models/Bus');

exports.createBooking = async (req, res) => {
    try {
    const { userId, busId, seatNumber } = req.body;

    // check if user exists
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // check if bus exists
    const bus = await Bus.findByPk(busId);
    if (!bus) return res.status(404).json({ error: "Bus not found" });

    // create booking
    const booking = await Booking.create({ userId, busId, seatNumber });

    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.params.id },
      include: [{ model: Bus, attributes: ["busNumber"] }]
    })
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


exports.getAllBookingBuses = async (req, res) => {
    try {
      const bookings = await Booking.findAll({
        where: { busId: req.params.id },
        include: [{ model: User, attributes: ["name", "email"] }]
      });
      res.status(200).json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
}