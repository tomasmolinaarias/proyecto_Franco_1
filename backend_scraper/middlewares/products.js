const onlyProduct = (req, res, next) => {

    if (req.body.length === 1) {
        const bodyData = Object.keys(req.body).map(key => req.body[key])
        const stateBody = bodyData.some((data) => data.length === 0)
        if (stateBody || bodyData.length < 4) {
            res.status(400).json({ "message": "Favor llenar todos los campos." })
        } else {
            return next()
        }
    } else {
        res.status(400).json({ "message": "Favor enviar solo un documento." })
    }

}

module.exports = {
    onlyProduct
}