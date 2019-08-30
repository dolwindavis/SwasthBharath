var express = require('express');
var router = express.Router();

var userController = require("../Controllers/userController");
var authController = require("../Controllers/authController");


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Swasth Bharath' });
});

router.get('/cultivation', function(req, res) {

  res.render('users/cultivation',{ title: 'Swasth Bharath' });

});

router.get('/profile', function(req, res) {

  res.render('users/profile',{ title: 'Swasth Bharath' });
  
});

router.get('/signin', function(req, res) {

  res.render('signin',{ title: 'Swasth Bharath' });
  
});

router.get('/signup',userController.signUpView);
router.post('/signup',userController.createFarmers);
router.post('/login',authController.login);


module.exports = router;
