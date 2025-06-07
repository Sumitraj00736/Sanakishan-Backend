const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct, getAllProducts } = require('../controllers/productController');
const { authenticate, authorizeRoles } = require('../middleware/auth');

router.post(
  '/',
  authenticate,
  authorizeRoles('product-admin', 'super-admin'),
  createProduct,
  (req, res) => {
    res.json({ message: "Product created" });
  }
);

router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', getAllProducts);

module.exports = router;
