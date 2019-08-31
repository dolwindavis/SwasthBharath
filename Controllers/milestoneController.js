var db = require("../models");
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

var milestoneController = {};

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next) {
      const isPhoto = file.mimetype.startsWith('image/');
      if(isPhoto) {
        next(null, true);
      } else {
        next({ message: 'That filetype isn\'t allowed!' }, false);
      }
    }
  };

milestoneController.createMilestone = async (req, res) => {

    console.log(req.body.cultivation_id);
    let cultivation =await db.Milestone.create({

        title:req.body.title,
        cultivation_id:req.body.cultivation_id,
        description:req.body.description,
        image:req.body.image,
        date:Date.now()
        
    });
    
    console.log('milestone created Successfully');
    
    res.redirect('/profile');
}

milestoneController.upload = multer(multerOptions).single('image');

milestoneController.resize = async (req, res, next) => {
  // check if there is no new file to resize
  if (!req.file) {
    next(); // skip to the next middleware
    return;
  }
  console.log(req.body.image);
  const extension = req.file.mimetype.split('/')[1];
  req.body.image = `${uuid.v4()}.${extension}`;
  // now we resize
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.image}`);
  // once we have written the photo to our filesystem, keep going!
  next();
};

module.exports = milestoneController;