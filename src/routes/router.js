const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { middleware } = require('../middleware/auth');
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require('../controllers/productController');
const { isAdmin } = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/users', middleware, authController.getAllUsers); // Get all users
router.get('/user', middleware, authController.getUser); // Read user
router.put('/user/:id', middleware, authController.updateUser); // Update user
router.delete('/user/:id', middleware, authController.deleteUser); // Delete user

// Routes for products
router.get('/products', getAllProducts); // Cek autentikasi dulu
router.get('/product/:id', getProduct); // Cek autentikasi dulu
router.post('/product', middleware, isAdmin, createProduct);
router.put('/product/:id', middleware, isAdmin, updateProduct);
router.delete('/product/:id', middleware, isAdmin, deleteProduct);

module.exports = router;
