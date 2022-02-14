// Configuration
require('dotenv').config()
const express = require('express')
const app = express()

// Create jsx view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Import places route
app.use('/places', require('./controllers/places'))

// Home page route
app.get('/', (req, res) => {
    res.render('home')
})

// Error page route
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 Page</h1>`)
})

// Server
app.listen(process.env.PORT)