const router = require('express').Router()
const MoviesClassController = require('../controllers/Movies-Controllers')
const moviesController = new MoviesClassController

router.get('/', moviesController.getMovies)

router.get('/:id', moviesController.getMovieById)

router.post('/', moviesController.createMovie)

router.put('/:id', moviesController.updateMovie)

router.delete('/:id', moviesController.wipeMovie)

module.exports = router