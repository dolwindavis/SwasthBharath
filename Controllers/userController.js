const db = require('../models');


exports.signUpView = async(req,res) => {

    res.render("signup",{ title: 'Swasth Bharath' });

}


exports.createFarmers = async (req, res) => {
      
    let UserId =await db.User.create({

        name: req.body.name,
        email:req.body.email,
        password:req.body.password
        
    });
    
    let farmerId = await db.Farmer.create({

        adhar:req.body.adhar ,
        locality:req.body.locality,
        verification: 0

    });

    console.log('user created Successfully');
    
    res.redirect('/');
}

