const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserRole } = require('../controllers/authController');
const passport = require('passport');
const { authenticate, authorizeRoles } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put(
  '/role',
  authenticate,
  authorizeRoles('super-admin'),
  updateUserRole
);
router.put('/update-role', updateUserRole);

// Google OAuth Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  const token = req.user.token;
  res.redirect(`/?token=${token}`); // Replace with your frontend URL
});

module.exports = router;