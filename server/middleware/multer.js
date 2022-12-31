const multer = require('multer');


// COPIED FROM MULTER DOCS & modified:
// "DiskStorage: The disk storage engine gives you full control on storing files to disk. 
// 2 Possible options: destination and filename, both used here: "
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.server/uploads')   // forgot what cb() is for again?
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-$(file.fieldname)`);  
  },
})

var upload = multer({ storage: storage });

module.exports = upload;  
// in TM, this storage is defined directly with the routes. We import this in "albumRoutes",
// but we only use it for the endpoint for uploading pictures. 