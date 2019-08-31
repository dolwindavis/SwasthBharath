var db = require("../models");

var profileController = {};

profileController.profile = (req, res) => {

    db.User.findOne({ where: {email:req.session.email,id:req.session.user_id } }).then(user => {
        
        db.Farmer.findOne({ where: {user_id:user.id } }).then(farmer => {

            db.Cultivation.findAll({ where: {user_id:user.id } }).then(cultivation => {

                console.log(cultivation);
                
                res.render('./users/profile',{user,farmer,cultivation,title:'swasth Bharath'});
     
           });
  
        });
  
    });
};

module.exports = profileController;
