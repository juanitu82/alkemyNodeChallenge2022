
const { Movie : MoviesModel } = require('../models/index')

class MoviesController {

    async getMovies(req, res, next){
        let queryMovies 
        try {
            queryMovies = await MoviesModel.findAll()

        } catch (error) {
            next(error)
        }

        if(queryMovies) res.status(200).json(queryMovies)
        else res.json('No movies found')
    }

    async getMovieById(req, res, next){

        const movieId = parseInt(req.params.id)

        try {
            if(isNaN(movieId)) return res.status(404).send('Enter a valid id')
            else {
                const searchedMovie = await MoviesModel.findByPk(movieId)
                if(searchedMovie) res.status(200).json(searchedMovie)
                else res.status(404).send('We couldnt find the searched movie')
            }
        } catch (error) {
            next(error)
        }
    }

    async createMovie(req, res, next){
        
        let createMovie

        try {
            createMovie = await MoviesModel.create(req.body)

            if(createMovie) res.status(200).json('The character has been successfully created')
            else return res.status(404).send('An error has occured')

        } catch (error) {
            next(error)
        }
    }

    async updateMovie(req, res, next){

        const movieId = parseInt(req.params.id)

        // Array with req.body keys
        const moviesUpdateFields = Object.keys(req.body)
        // Array with user model attributes
        const moviesDataFields = ['title', 'date', 'rate', 'image']
        // method to validate that any of the req.body incoming values are valid user attributes to modify
        const permitedData = moviesUpdateFields.every( arrayItem => moviesDataFields.includes(arrayItem))

        try {
            
            if(permitedData){
                
                await MoviesModel.update(req.body, {
                 where: {
                     id: movieId
                 }
     
                })

            } else {
                const error = new Error('Youre trying to update an invalid attribute')
                next(error)
            }

        } catch (error) {
            next(error)
        }

        res.status(200).send('The movie has been successfully updated')
    }

    async wipeMovie(req, res, next){

        const movieId = parseInt(req.params.id)

        try {
            
            await MoviesModel.destroy({
                where: {
                    id: movieId
                }
            })

        } catch (error) {
            next(error)
        }

        res.status(200).send('The movie has been successfully wiped from DB')
    }
}

module.exports = MoviesController