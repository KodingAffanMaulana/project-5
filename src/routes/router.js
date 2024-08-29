const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller');
const authController = require('../controllers/authController');
const { auth } = require('../middleware/auth');

// router.use('/', Controller.helloWorld);
// Auth Routes
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
