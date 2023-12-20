//Import 'mysql' module
const mysql = require('mysql');


//MySQL Connection is established and the result is stored in instance variable `this.connection`

//`config` as parameter typically contains configuration details like host, user, password, and, database name
class MySQLDB {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }










    
}