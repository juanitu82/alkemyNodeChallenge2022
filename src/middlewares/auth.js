module.exports =     (req, res, next) => {
    console.log('middleware ejecutado', req.url)
    console.log('esto es el user', req.user)
    next()
}
