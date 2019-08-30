var db = require("../models");
var passport = require("../config/passport");

var authController = {};


authController.login = (req, res) => {

  db.User.findOne({ where: {email:req.body.email,password:req.body.password } }).then(user => {
    
    if(user != null){

      req.session.email = user.email;
      req.session.userid = user.id;

      return res.render('/profile');

    }

  });

};
  exports.logout = function(req, res) {

    req.session.destroy();

  };


  module.exports = authController;
