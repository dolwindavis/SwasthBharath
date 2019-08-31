var db = require("../models");

var cultivationController = {};

cultivationController.createCultivation = async (req, res) => {


    let cultivation =await db.Cultivation.create({

        title:req.body.title,
        area:req.body.area,
        crop:req.body.crop,
        time:req.body.time,
        user_id:req.session.user_id,
        description:req.body.description
        
    });
    
    console.log('cultivation created Successfully');
    
    res.redirect('/profile');
}

cultivationController.showCultivation =  (req, res) => {

    db.Cultivation.findOne({ where: {id:req.params.id } }).then(cultivation => {
        
        
        db.Milestone.findAll({ where: {cultivation_id:cultivation.id } }).then(milestone => {
            
            res.render('users/cultivation',{cultivation,milestone,title: 'Swasth Bharath' });
            
        });
  
    });
    
    // res.redirect('/profile');
}

module.exports = cultivationController;
