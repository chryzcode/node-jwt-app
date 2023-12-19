const authenticationMiddleware = async (req, res, nexe) => {
    console.log(req.headers.authorization)
    next()
}

module.exports = authenticationMiddleware