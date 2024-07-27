// api_node/index.js
require('dotenv').config();
const app = require('./server.js');
const mongoose = require("mongoose");
const port = 8080;

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('DB Connected!'))
    .catch(err => console.error('Database connection error: ', err));

app.listen( port, ()=>{
    console.log('Server running on port http://localhost:8080')
});