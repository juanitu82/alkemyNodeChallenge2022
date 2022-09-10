const express = require('express')
const cors = require('cors')
const expressSession = require('express-session')
const passport = require('passport')
// const bodyParser = require('body-parser')
const expressSessionObject = require('./utils/cookieSessionObject')
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
        this.app.use(expressSession(expressSessionObject))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(passport.initialize())
        this.app.use(passport.session())
        this.app.use(globalPath, globalRoutesObject)
    }
}



module.exports = App

// /auth/login ***
//  /auth/register ***

// /characters --> crud + details
//  GET /characters?name=nombre
//  GET /characters?age=edad
//  GET /characters?movies=idMovie

// GET /movies --> crud + details
// GET /movies?name=nombre
//  GET /movies?genre=idGenero
//  GET /movies?order=ASC | DESC

// mail ****
// documentacion
// tests

// id cliente: 335343514685-94bk94980t0cotg4ouc6g0b2s56mm1vo.apps.googleusercontent.com
// secreto: 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