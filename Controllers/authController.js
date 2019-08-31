var db = require("../models");
var passport = require("../config/passport");

var authController = {};


authController.login = (req, res) => {

  db.User.findOne({ where: {email:req.body.email,password:req.body.password } }).then(user => {
    
    if(user != null){

      req.session.email = user.email;
      req.session.user_id = user.id;

      return res.redirect('/profile');

    }

  });

  // return res.redirect('/signin');
  
};


authController.logout = (req, res) => {

    req.session.destroy();

    return res.redirect('/');

};


  module.exports = authController;
