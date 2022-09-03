const router = require('express').Router()

const mailRoute = require('./mailRoute')
const authRoute = require('./authRoute')
const charactersRoute = require('./charactersRoute')
const moviesRoute = require('./moviesRoute')

router.use('/auth', authRoute)
router.use('/characters', charactersRoute)
router.use('/movies', moviesRoute)
router.use('/mail', mailRoute)

module.exports = router