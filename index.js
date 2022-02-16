// Configuration
require('dotenv').config()
const express = require('express')
const app = express()

// Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Import places route
app.use('/places', require('./controllers/places'))

// Home page route
app.get('/', (req, res) => {
    res.render('home')
})

// Error page route
app.get('*', (req, res) => {
    res.render('error404')
})

// Server
app.listen(process.env.PORT)