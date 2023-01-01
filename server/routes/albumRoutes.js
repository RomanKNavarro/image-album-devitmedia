// IN TM'S:
// const express = require('express')  
// const router = express.Router()

// in TM's, our models are handled in the controllers (e.g: entryModel). This app. here is much more simple.
const Album = require('../models/album');
const router = require('express').Router();
const upload = require('../middleware/multer');

// add new album
router.post("/add", (req, res) => {
  const newAlbum = new Album(req.body);
  newAlbum.save((err, data) => {
    if (err) {
      return res.json({
        status: false,
        message: "Server error", 
        result: err,  
      })
    }
    return res.json({
      status: true,
      message: "Album added",
      result: data,
    })
  })
})

// GET the albums. What is "/"? lol: http://localhost:5000/albums
router.get("/", (req, res) => {
  // FASCINATING: we use the Album model to retrieve the Album objects. 
  // what is exec()? The exec() method takes a string as the parameter. This string is which is to be 
  // checked for match in the given string.
  Album.find().exec((err, albums) => {
    if (err) {
      return res.json({
        status: false,
        message: "Server error -Roman", 
        result: err,  
      })
    }
    return res.json({
      status: true,
      message: "getting Roman's albums successful",
      result: albums,
    })
  })
})

// GET individual album 
// example: http://localhost:5000/albums/63aff11cc0614f79ef03249b
// THIS IS SUPER EASY
router.get("/:albumId", (req, res) => {
  const albumId = req.params.albumId;   // where do we get albumId? FROM THE ROUTE ITSELF! (NICE)
  Album.findById(albumId).exec((err, album) => {
    if (err) {
      return res.json({
        status: false,
        message: "Server error -Roman", 
        result: err,  
      })
    }
    return res.json({
      status: true,
      message: "getting individual album successful",
      result: album,
    });
  });
});

// UPLOAD IMAGE(S)
// PUT (or upload) image  (WIP)
// example: http://localhost:5000/albums/upload/63aff11cc0614f79ef03249b
// HERE is the only place we use our "upload" middleware. Never seen middleware used this way,
// with array(). The 3 dictates the max. amount of files that can be uploaded at once. 
// in our route: WE JUST PASS THE ALBUM ID, NOT THE FILENAME OR ANYTHING LOL
router.put("/upload/:albumId", upload.array("images", 3), async (req, res) => {
  // YOO? Even though my Model prop. is named "images", I think the above (prev. "image") changes it to "image"! -YES
  const albumId = req.params.albumId;   // where do we get albumId? FROM THE ROUTE ITSELF! (NICE)
  const images = [];
  const inputFiles = req.files;  
  // ^ what ab/ when we don't get values from either req.params or req.body, and just straight from req itself? 
  // what does a req
  inputFiles.map((file) => {
    images.push(file.filename);
  });

  // since we're adding a new file to the given album, we're essentially updating it:
  // TODO: get signature of findOneAndUpdate. 
  Album.findOneAndUpdate(
    {
      _id: albumId,
    },
    {
      // "push" the images array (above) to our Album object's (or Model's) 'images' prop.
      $push: {images: images},  
    },
    // not sure what this is for: "new is true so that we can get the updated album details. I will explain later"
    {new: true},
    // this is our callback func. for findOneAndUpdate() 
    function(err, data) { 
      // still confused how everyone is always using these callbacks and pulling "data" out of their ass. 
      if (err) {
        return res.json({
          status: false,
          message: "Server error -Roman", 
          result: err,  
        });
      }
      return res.json({
        status: true,
        message: "upload image(s) successful",
        result: data,
      });
    }
  );
  /* This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.*/ 
});

module.exports = router;
// IDENTICAL TO TM'S ROUTES FILES:
// module.exports = router
