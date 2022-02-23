// Dependency
const mongoose = require('mongoose')

// Place Schema
const placeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  pic: String,
  cuisines: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    default: 'Anytown' },
  state: { 
    type: String, 
    default: 'USA' },
  founded: Number
})

// Export the model
module.exports = mongoose.model('Place', placeSchema)