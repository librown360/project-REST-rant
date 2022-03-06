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
  .populate('comments')
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// PUT a Place STUB
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// DELETE a Place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// EDIT a Place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    res.render('error404')
  })
})

// POST a Comment
router.post('/:id/comment', (req, res) => {
  // Set rant value to true or false
  req.body.rant = req.body.rant ? true : false
  // Find the place to be updated
  db.Place.findById(req.params.id)
  .then(place => {
    // Create and save comment to database
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      // Redirect to place show page
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// DELETE a Comment
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.findByIdAndDelete(place.comments = req.params.commentId)
    .then(comment => {
      res.redirect(`/places/${req.params.id}`)
    })
  })
})

// Export router
module.exports = router