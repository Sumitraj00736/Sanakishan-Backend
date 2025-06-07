const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  bookingDate: Date,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);