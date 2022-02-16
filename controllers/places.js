// Express router
const router = require('express').Router()

// Add a New Place route
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Post new place stub route @@@@@@@@@@@@ NEED TO LOOK INTO THIS @@@@@@@@@@@@@@
// router.post('/places', (req, res) => {
//   req.send('places')
// })

// Places route
router.get('/', (req, res) => {
    let places = [{
        name: 'Vegan Delight',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai',
        pic: '/images/Vegan_Delight.jpg',
        credit: {
          url: 'https://unsplash.com/@annapelzer',
          source: 'Anna Pelzer'
        }
      }, {
        name: 'The Spicy Spot',
        city: 'Charlotte',
        state: 'NC',
        cuisines: 'Indian',
        pic: '/images/Spicy_Spot.jpg',
        credit: {
          url: 'https://unsplash.com/@foodfaithfit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          source: 'Taylor Kiser'
        }
      }]
    res.render('places/index', {places})
})

// Export router
module.exports = router