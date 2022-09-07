const router = require('express').Router()
const passport = require('passport')
const { User } = require('../models/index')



const passportScope = {
    scope: ['profile', 'email'],
    'session': true
  }

 
router.get(
    '/register',
    passport.authenticate('google', passportScope)
);

router.get(
    '/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/auth/loginfailure',
        passReqToCallback: true
    })
)

router.get('/loginFailure', (req, res) => {
    console.log('access denied')
    res.redirect('/auth/register')
})

router.get('/logout', (req, res, next) => {
    req.logout( (err) => {
        if (err) return next(err)
        else {
            res.redirect('/');
            console.log(`You'd successfully logged out`);
        }
      });
  });

router.get('/user', (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        mail: req.user.email
    });
  });

  router.delete('/:id/delete', (req, res, next) => {
//    console.log(req, res)
    let userId = req.params.id
    req.logout(async (err) => {
        if (err) return next(err)
        else {
            await User.destroy({
                where: {
                    id: userId
                }
            })
            res.json({
                msge: 'Youd successfully wiped out your account',
                req: req.user
            });
            console.log(`You'd successfully wiped out your account`);
        }
      });
    
  })

module.exports = router