'use strict';

const { movies:mockMovies } = require('../utils/mockData')
const { Movie } = require('../models/index')
//I create new objects with the attributes to create new movies in DB
const movies = mockMovies.map(movie => {
  return{ 
      title: movie.title,
      image: movie.image,
      date: movie.date,
      rate: movie.rate
  }})

module.exports = {
  async up (queryInterface, Sequelize) {
    let movie
    for (let index = 0; index < movies.length; index++) {
      movie = await Movie.create(movies[index])
      await movie.addGenre(mockMovies[index].generos)   
      await movie.addCharacter(mockMovies[index].characters)   
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movie', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
