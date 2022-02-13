// Configuration
require('dotenv').config()
const express = require('express')
const app = express()

// Import places route
app.use('/places', require('./controllers/places'))

// Main page route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Error page route
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

// Server
app.listen(process.env.PORT)