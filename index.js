require('dotenv').config()

const Server = require('./src/App')
const PORT = process.env.PORT || 3000
const globalRoutesObject = require('./src/routes/index')
const globalPath = '/'


const server = new Server(PORT)
require('./src/services/passport')
server.midllewares( globalPath, globalRoutesObject)
server.listen()




// Character: Character,
// characterMovie: characterMovie,
// Genre: Genre,
// Movie: Movie,
// movieGenre: movieGenre


