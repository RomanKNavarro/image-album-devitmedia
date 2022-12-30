const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));   // to get the value from the body (like from postman)
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "uploads")));

const mongoURI = 
  "mongodb+srv://ronnoverro:streets123@imagecluster2.sq4t8aa.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI);

module.exports = app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!`);
})