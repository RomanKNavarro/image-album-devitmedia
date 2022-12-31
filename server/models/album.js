const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: {type: String, required: [true, 'Please add a name']}, 
  description: {type: String, required: true},
  images: {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('Album', albumSchema)

// IN TM'S APP:
// module.exports = mongoose.model('Entry', entrySchema)