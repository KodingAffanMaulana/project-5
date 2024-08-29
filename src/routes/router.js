const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { middleware } = require('../middleware/auth');

// router.use('/', Controller.helloWorld);
// Auth Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/users', middleware, authController.getAllUsers); // Get all users
router.get('/user', middleware, authController.getUser); // Read user
router.put('/user/:id', middleware, authController.updateUser); // Update user
router.delete('/user/:id', middleware, authController.deleteUser); // Delete user

module.exports = router;
