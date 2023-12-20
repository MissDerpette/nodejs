# Backend Development
> Creating API endpoints, database interface, and, databases.


### How to set up database

Create and access local storage

```bash
# makes local directory
mkdir express-crud-mysql
```

```bash
# changes directory
cd express-crud-mysql
```


```bash
# Using Homebrew
# for node
brew install node
# Install nodejs (npm already included in version 21)
# for database
brew install mysql
```


To connect to database server:

```bash
# -h host/ip address of server, -u username, p-password
mysql -h -u root p

mysql -h 10.10.10.10 -u -root -p
# enter password
```

To create database:
```sql
CREATE DATABASE filename;
CREATE DATABASE kers_product;
-- to validate the newly created database, show all databases
SHOW DATABASES;
```
To access database:

```sql
USE DATABASE filename;
USE DATABASE kers_product;
```

To create table:
```sql

-- use IDE for creating a table then copy and paste it on iterm
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
-- to validate the recently created table, show all tables
SHOW TABLE;

```
 

### How to set up Node Express server
Create a file named `index.js`

To set up a node.js app using the express framework, declare `express` and assign it on a constant:

```js
const express = require('express');
```

Create `const app` instance for express application that invokes the express function:

```js
const app = express();
```


Add a middleware to the Express application to parse incoming requests with JSON payloads:
```js
app.use(express.json());
```

And then, import a module for MySQL database operation from a different file that contains code for connection to, and, interacting with a MySQL database:

```js

const MySQLDB = require('./db');
```


Create database connection
```js
const db = new MySQLDB(dbConfig);
db.connect();
```

Now, create another file named `db.js` where modules that interact with database will be coded. 

On that file import `mysql` module:
```js
const mysql = require('mysql');
```

Create a class that encapsulate a set of methods for interacting with a MySQL database using 'mysql' node.js module. This class has a constructor that takes a `config` object as a parameter. Then establish a MySQL connection and store it in instance variable `this.connection`:

`config` as parameter typically contains configuration details like host, user, password, and, database name


```js
class MySQLDB {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
}
```