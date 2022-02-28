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
  res.send('PUT /places/:id stub')
})

// DELETE a Place STUB
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT a Place STUB
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// POST a Comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
    // Set rant value to true or false
    req.body.rant = req.body.rant ? true : false
    // Create and save comment to database
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      // Redirect to place show page
      .then(place => {
        res.redirect('places/show', { place })
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

// DELETE a Comment STUB
router.delete('/:id/comment/:commentId', (req, res) => {
    res.send('GET /places/:id/comment/:commentId stub')
})

// Export router
module.exports = router