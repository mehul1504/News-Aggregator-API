const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validationHelper = require('../helpers/validationHelper');

router.post('/signup', validationHelper.validateRegister, authController.register);
router.post('/login', validationHelper.validateLogin, authController.login);

module.exports = router;