const express = require('express');

const router = express.Router();
const userController = require('../controllers/user_controller');


router.post('/signUp',userController.create);
router.post('/login',userController.createSession);

module.exports = router;