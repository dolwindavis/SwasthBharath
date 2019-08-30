var express = require('express');
var router = express.Router();

var userController = require("../Controllers/userController");
var authController = require("../Controllers/authController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Swasth Bharath' });
});

router.get('/signup',userController.signUpView);
router.post('/signup',userController.createFarmers);
router.post('/login',authController.login);


module.exports = router;
