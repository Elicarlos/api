const Address = require('../models/Address')
const User = require('../models/Users')


module.exports = {
    async index (req, res) {
        const { user_id} = req.params
    
        //Aqui ele ve se o usuario existe e busca uma associaçao addresses
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses'}
        })

        // Assim retorna dados do usuario
        //return res.json(user)
        // Assim retorna endereços
        return res.json(user.addresses)

    },

    async store(req, res){
        //user_id veio do paramentro da rota
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)
        
        // Devemos ver se o usuario exist
        if (!user) {
            return res.status(400).json({ error: 'User not found !'})
        }

        // se ele encontrar usuario devemos criar um endereço

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
        });
        return res.json(address)
    }
};