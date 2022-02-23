// Dependencies
const router = require('express').Router()
const db = require('../models')

// GET All Places
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST Places
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// Render New Place Page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET One Place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// PUT A Place STUB
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE A Place STUB
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT A Place STUB
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// POST A Comment STUB
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// DELETE A Comment STUB
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// Export router
module.exports = router