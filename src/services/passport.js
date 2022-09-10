
const GoogleStrategy = require('passport-google-oauth2').Strategy
const passport = require('passport')
const {googleStrategyObject, googleStrategyCallback} = require('../utils/googleStrategyObject')
const { User } = require('../models/index')


passport.use(new GoogleStrategy( 
    googleStrategyObject,
    googleStrategyCallback
));

passport.serializeUser( (user, done) => {
    done(null, user.id) 
})
    
passport.deserializeUser(  async (id, done) => {
    let userQuery
    try {
        userQuery = await User.findOne({
            where: { id }
        })    
        done(null, userQuery);
    } catch (error) {
        console.log(error)
    }
   
    });
      