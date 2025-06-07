const express = require('express');
const router = express.Router();
const { authenticate, authorizeRoles } = require('../middleware/auth');

router.get(
  '/dashboard',
  authenticate,
  authorizeRoles('super-admin'),
  (req, res) => {
    res.json({ message: "Super admin dashboard access granted" });
  }
);

module.exports = router;
