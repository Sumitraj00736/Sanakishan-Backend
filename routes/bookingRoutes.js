const express = require('express');
const router = express.Router();
const { bookProduct, getBookings } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/auth');

// Apply authentication to routes
router.post('/', authenticate, bookProduct);
router.get('/', authenticate, getBookings); 

module.exports = router;
