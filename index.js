require('dotenv').config()
const Server = require('./src/App')
const PORT = process.env.PORT || 3000
const globalRoutesObject = require('./src/routes/index')
const globalPath = '/'

const server = new Server(PORT)
server.midllewares( globalPath, globalRoutesObject)
server.listen()

// console.log(process.env.DB_USER, process.env.DB_PASSWORD,process.env.DB_NAME,process.env.DB_HOST,process.env.DB_DIALECT)
console.log(typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD, process.env.DB_USER)



