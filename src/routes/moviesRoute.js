const router = require('express').Router()

router.get('/', (req, res) => res.send('hola movies'))

module.exports = router