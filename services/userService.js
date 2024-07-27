// api_node/services/userService.js
const User = require('../models/User.js');

const createUser = async (userData) =>  {
    try{
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    }catch(err){
        throw err;
    }
};
module.exports = { createUser };