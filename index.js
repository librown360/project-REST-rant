// Configuration
require('dotenv').config()

// Dependencies
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Home page route
app.get('/', (req, res) => {
    res.render('home')
})

// Import places route
app.use('/places', require('./controllers/places'))

// Error page route
app.get('*', (req, res) => {
    res.render('error404')
})

// Server
app.listen(process.env.PORT)