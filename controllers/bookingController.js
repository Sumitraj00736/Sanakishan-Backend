const Booking = require('../models/Booking');
const Product = require('../models/Product');

exports.bookProduct = async (req, res) => {
  try {
    const { productId, bookingDate, address } = req.body;
    const existing = await Booking.findOne({ product: productId, bookingDate });
    if (existing) return res.status(400).json({ message: 'Product already booked on this date' });
    const booking = new Booking({
      user: req.user.id,
      product: productId,
      bookingDate,
      address
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user product');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};