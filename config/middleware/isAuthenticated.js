module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if(req.session.email && req.session.id){

        db.User.findOne({ where: {email:req.session.email,id:req.session.id } }).then(user => {
    
          req.user= user; 
      });


    }

    else{

      req.session.destroy();
    }
  };