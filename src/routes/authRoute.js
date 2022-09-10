const router = require('express').Router()
const passport = require('passport')
const { User } = require('../models/index')
const AuthClass = require('../controllers/AuthControllers')

const authControllers = new AuthClass

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
        failureRedirect: '/auth/loginfailure'
    })
)

router.get('/loginFailure', (req, res, next) => res.redirect('/auth/register') )

router.get('/logout', authControllers.logout);

router.get('/user', authControllers.getUser);

router.put('/:id/update',  authControllers.updateUser)

router.delete('/:id/delete', authControllers.deleteUser);
    
  

module.exports = router