// api_node/server.js
const express = require('express');
const createUserController = require("./controllers/userController");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send({'message': 'Lets GO!'})
});

app.post('/signup', createUserController);

module.exports = app;