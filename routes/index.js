var express = require('express');
var router = express.Router();

var userController = require("../Controllers/userController");
var authController = require("../Controllers/authController");
var profileController = require("../Controllers/profileController");
var cultivationController = require("../Controllers/cultivationController")
var milestoneController = require("../Controllers/milestoneController")
// var authOnly = require("../config/middleware/authOnly");




/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Swasth Bharath' });
});

router.get('/cultivation', function(req, res) {

  res.render('users/cultivation',{ title: 'Swasth Bharath' });

});

router.get('/cultivation/create', function(req, res) {

  res.render('users/cultivation-create',{ title: 'Swasth Bharath' });

});

router.get('/profile',profileController.profile);

router.get('/signin', function(req, res) {

  res.render('signin',{ title: 'Swasth Bharath' });
  
});

router.post('/cultivation/create',cultivationController.createCultivation);
router.get('/cultivation/show/:id',cultivationController.showCultivation);
router.post('/cultivation/milestone',milestoneController.upload,milestoneController.resize,milestoneController.createMilestone);
router.get('/signup',userController.signUpView);
router.post('/signup',userController.createFarmers);
router.post('/login',authController.login);
router.get('/logout',authController.logout);



module.exports = router;
