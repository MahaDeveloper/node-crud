const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var con = require("./connection");

const db = require('./models');  // Import models

const userRoutes = require('./routes/user.routes'); // User routes

app.use(bodyParser.json());

// Add this middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up EJS
app.set('view engine', 'ejs');

// Register routes
app.use('/api', userRoutes);

// Sync Sequelize with MySQL
db.sequelize.sync();

const port = 3000;

app.listen(port, () =>{

    console.log('server lisening to port : '+port);
});