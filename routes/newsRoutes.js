const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const validationHelper = require('../helpers/validationHelper');

router.get('/preferences', validationHelper.authenticateUser, newsController.getPreferences);
router.put('/preferences', validationHelper.authenticateUser, validationHelper.validatePreferencesUpdate, newsController.updatePreferences);
router.get('/news', validationHelper.authenticateUser, newsController.getNews);

module.exports = router;
