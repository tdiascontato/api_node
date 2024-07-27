// api_node/server.js
const express = require('express');
const createUserController = require("./controllers/userController");
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send({'message': 'Lests GO!'})
});

app.post('/user/signup', createUserController);

module.exports = app;