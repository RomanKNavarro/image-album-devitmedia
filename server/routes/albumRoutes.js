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

// GET the albums
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

// PUT (or upload) image  
// example: http://localhost:5000/albums/63aff11cc0614f79ef03249b
// HERE is the only place we use our "upload" middleware. Never seen middleware used this way,
// with array(). The 3 dictates that the max. amount of files that can be uploaded at once is 3. 
router.put("/upload/:albumId", upload.array("image", 3), async (req, res) => {
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

module.exports = router;
// IDENTICAL TO TM'S ROUTES FILES:
// module.exports = router
