const multer = require('multer');

// COPIED FROM MULTER DOCS & modified:
// "DiskStorage: The disk storage engine gives you full control on storing files to disk. 
// 2 Possible options: destination and filename, both used here: "
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // forgot what cb() is for again? Anyways, this determines where to upload the files
    cb(null, './server/uploads')  // original path looks wrong: './server/uploads' 
  },
  filename: function (req, file, cb) {
    // cb(null, `${Date.now()}-${file.fieldname}`); this names the files as: 1672531722526-image, which isn't what we want
    cb(null, `${Date.now()}-${file.originalname}`); // now they are: 1672600966595-homelessNigga.png
  },
});

var upload = multer({ storage: storage });

module.exports = upload;  
// in TM, this storage is defined directly with the routes. We import this in "albumRoutes",
// but we only use it for the endpoint for uploading pictures. 

// THIS FILE IS GOOD. "MulterError: Unexpected field" not here