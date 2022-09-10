const { User } = require('../models/index')

const googleStrategyObject = {
    clientID: '335343514685-94bk94980t0cotg4ouc6g0b2s56mm1vo.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
}

const googleStrategyCallback = async ( accessToken, refreshToken, profile, done )  => {
      let queryUser, createUser
      try {

        queryUser = await User.findOne({
          where: {
            googleId: profile.id
          }
        })

        if(queryUser) {
          done(null, queryUser)
        } else {
            try {
              
              createUser = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.email
              })
  
            } catch (error) {
              console.log(error)
            }
            
            done(null, createUser)
                
        }

      } catch (error) {
        console.log(error)
      }
 
  }


module.exports = { googleStrategyObject, googleStrategyCallback }