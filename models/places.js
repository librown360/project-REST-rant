// Dependency
const mongoose = require('mongoose')

// Place Schema
const placeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  pic: {
    type: String,
    default: './public/images/default.jpg'
  },
  cuisines: { 
    type: String, 
    required: true 
  },
  city: { 
    type: String, 
    default: 'Charlotte' },
  state: { 
    type: String, 
    default: 'NC' },
  founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

// Method to show details of places
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

// Export the model
module.exports = mongoose.model('Place', placeSchema)