const express = require('express')
const cors = require('cors')

class App {
    constructor(port){
        this.app = express()
        this.port = port
        this.listen
        this.midllewares
    }
    listen(){
        return this.app.listen(this.port, () => console.log(`listening in port ${this.port}`))
    }
    midllewares(globalPath = '/', globalRoutesObject){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(globalPath, globalRoutesObject)
    }
}

module.exports = App

// /auth/login
//  /auth/register
// /characters --> crud + details
//  GET /characters?name=nombre
//  GET /characters?age=edad
//  GET /characters?movies=idMovie

// GET /movies --> crud + details
// GET /movies?name=nombre
//  GET /movies?genre=idGenero
//  GET /movies?order=ASC | DESC

// mail
// documentacion
// tests

