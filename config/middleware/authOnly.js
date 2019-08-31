module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if(req.session.email && req.session.user_id){

        console.log(req.session.email);
        
        next(); 
    }
    else{

     res.redirect('/signin');
      
    }
  };