
const { User } = require('../models/index')

class AuthControllers {
    logout(req, res, next) {
        
        req.logout( (err) => {
            if (err) return next(err)
            else {
                req.user = undefined
                res.redirect('/');
                console.log(`You'd successfully logged out`);
            }
          });
    }
    
    getUser(req, res) {
    
        req.user ?
        res.json({
            id: req.user.id,
            name: req.user.name,
            mail: req.user.email
        })
        :
        res.json({msge: 'Theres no user loged in'})
    }

    async updateUser (req, res, next) {
        // Array with req.body keys
        const userUpdateFields = Object.keys(req.body)
        // Array with user model attributes
        const userDataFields = ['googleId', 'name', 'email']
        // method to validate that any of the req.body incoming values are valid user attributes to modify
        const permitedData = userUpdateFields.every( arrayItem => userDataFields.includes(arrayItem))
    
        if(!permitedData) {
            return next({
                status: 400,
                msge: 'Invalid update'
            })
        }
        else {
            try {
                await User.update(req.body, 
                    {
                        where: {
                            id: parseInt(req.params.id)
                        }
                    })
            } catch (error) {
                next(error)
            }
            res.status(200).json({
                msge: 'Your user has been successfully updated'
            })
        
        }
    }

    async deleteUser (req, res, next) {
        let userId = req.params.id
        req.logout( async (err) => {
            if (err) return next(err)
            else {
                req.user = undefined
                try {
                    await User.destroy({
                        where: {
                            id: parseInt(userId)
                        }
                    })
                    
                } catch (error) {
                    next(error)
                }
                console.log(`You'd successfully wiped out your account`);
        
                res.json({
                    msge: 'Youd successfully wiped out your account',
                    req: req.user
                })
            }
            })
        }
}

module.exports = AuthControllers