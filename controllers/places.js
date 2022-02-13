// Express router
const router = require('express').Router()

// Places route
router.get('/', (req, res) => {
    res.send('GET /places')
})

// Export router
module.exports = router