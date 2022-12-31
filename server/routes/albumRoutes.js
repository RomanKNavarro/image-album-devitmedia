// IN TM'S:
// const express = require('express')  
// const router = express.Router()

// in TM's, our models are handled in the controllers (e.g: entryModel). This app. here is much more simple.
const Album = require('../models/album');
const router = require('express').Router()

router.post("/add", (req, res) => {
  const newAlbum = new Album;
  newAlbum.save((err, data) => {
    if (err) {
      return res.json({
        status: false,
        message: "Server error", 
        result: err,  
      })
    }
    return res.json({
      status: false,
      message: "Album added",
      result: err,
    })
  })
})

module.exports = router;
// IDENTICAL TO TM'S ROUTES FILES:
// module.exports = router
