// api_node/controllers/userController.js
const userService = require('../services/userService.js');
const createUserController = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
         res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
};

module.exports =  createUserController ;