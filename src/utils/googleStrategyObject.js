const { User } = require('../models/index')

const googleStrategyObject = {
    clientID: '335343514685-94bk94980t0cotg4ouc6g0b2s56mm1vo.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true,
    proxy: true
}

const googleStrategyCallback = function(request, accessToken, refreshToken, profile, done)  {
  
  process.nextTick( function () {
    
      User.findOne({
        where: {
          googleId: profile.id
        }
      })
      .then( findedUser => {
        if(findedUser) {
            console.log('access granted')
            done(null, findedUser)
        } else {
              User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.email
              })
                .then( userCreated => {
                  done(null, userCreated)
                })
                .catch(err => console.log(err))
        }
      })
      .catch( error => console.log(error) )
  })}


module.exports = {googleStrategyObject, googleStrategyCallback }