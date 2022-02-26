// Dependency
const mongoose = require('mongoose')

// Comment Schema
let commentSchema = new mongoose.Schema({
    author: {
        type: String,
        default: 'Anonymous'
    },
    rant: {
        type: Boolean,
        default: false
    },
    stars: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        default: ''
    }
})

// Export comment schema
module.exports = mongoose.model('Comment', commentSchema)