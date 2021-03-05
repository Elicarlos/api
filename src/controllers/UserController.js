//Lida com requisiçoes e responde para o front End
const User = require('../models/Users')

module.exports = {

    async index (req, res) {
        const users = await User.findAll()
        res.json(users)

    },
    async store(req, res) {
        //Quando criamos um usuario, vamos enviar atraves do corpo da requisição, dois campos
        const { name, email } = req.body;

        const user = await User.create({ name, email});

        return res.json(user)

    }
}