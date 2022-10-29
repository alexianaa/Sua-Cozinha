const routes = require("express").Router();

routes.use('/', (req, res) => {
    try {
        res.send({message: "Bem vindo"})
    } catch (error) {
        res.status(500).send({error: error})
    }
})

module.exports = routes;