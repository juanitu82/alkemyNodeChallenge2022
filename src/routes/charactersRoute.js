const router = require('express').Router()

router.get('/', (req, res) => res.send('hola characters'))

module.exports = router