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

// Method to show details of places
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

// Export the model
module.exports = mongoose.model('Place', placeSchema)