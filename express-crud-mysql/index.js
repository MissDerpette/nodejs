//Set up node.js app using the express framework
const express = require('express');

//An instance for express application that invokes the express function
const app = express();

//Will parse any incoming JSON requests
app.use(express.json());

//Importing a module for MySQL database operation from a db.js file
const MySQLDB = require('./db');

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 's3cure_th1s_sh1t',
    database: 'node0'
};

// Create database connection
const db = new MySQLDB(dbConfig);
db.connect();
