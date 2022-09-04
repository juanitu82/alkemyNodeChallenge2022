require('dotenv').config()
// const { character, movie, genre } = require('./src/models/index')
const nada = require('./src/models/index')


const Server = require('./src/App')
const PORT = process.env.PORT || 3000
const globalRoutesObject = require('./src/routes/index')
const globalPath = '/'

const server = new Server(PORT)
server.midllewares( globalPath, globalRoutesObject)
server.listen()




// Character: Character,
// characterMovie: characterMovie,
// Genre: Genre,
// Movie: Movie,
// movieGenre: movieGenre


