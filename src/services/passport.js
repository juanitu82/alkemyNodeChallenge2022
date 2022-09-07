
const GoogleStrategy = require('passport-google-oauth2').Strategy
const passport = require('passport')
const {googleStrategyObject, googleStrategyCallback} = require('../utils/googleStrategyObject')
const { User } = require('../models/index')


passport.serializeUser( (user, done) => {
  console.log('serializing', 'este es el user')  
//   console.log('ruta', res.pathname)  
    done(null, user.id) 
})
  
passport.deserializeUser(  async (id, done) => {
    let userQuery
    try {
        userQuery = await User.findByPk(id)    
    } catch (error) {
        console.log(error)
    }
    //   console.log(userQuery)
    console.log('deserializing')
      done(null, userQuery);
        
  });
  
passport.use(new GoogleStrategy( 
    googleStrategyObject,
    googleStrategyCallback
));