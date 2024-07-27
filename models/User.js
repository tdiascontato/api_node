// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
},{
    collection: 'User',
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
