const express = require('express');
const passport=require('passport');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);
router.get('/createSession',usersController.createSession);
// use passport as middleware to create session


module.exports = router;