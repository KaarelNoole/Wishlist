const express = require('express');
const wishesController = require('../controllers/wishesController');
const error404Controller = require('../controllers/error404Controller');
const router = express.Router();


router.get('/', wishesController.getMainPage);
router.post('/', wishesController.postNewWish);
router.post('/delete', wishesController.deleteWish);
router.get('*', error404Controller.getErrorPage);

module.exports = router;