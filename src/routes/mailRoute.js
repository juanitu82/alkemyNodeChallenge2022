const router = require('express').Router()

router.get('/', (req, res) => res.send('hola mail'))

module.exports = router