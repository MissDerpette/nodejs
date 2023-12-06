const sqlite3 = require('sqlite3').verbose();

class SQLiteDB {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the SQLite database.');
        });

        this.initialize();
    }

    initialize() {
        const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            email TEXT NOT NULL UNIQUE
        )
        `;

        this.db.run(sql, (err) => {
            if (err) {
                console.error(err.message);
            }
        });
    }
    
    createUser(user, callback) {
        const { username, password, name, age, email } = user;
        const sql = `INSERT INTO users (username, password, name, age, email) VALUES (?, ?, ?, ?, ?)`;

        this.db.run(sql, [username, password, name, age, email], function (err) {
            callback(err, { id: this.lastID });
        });
    }


    getAllUsers(callback) {
        const sql = `SELECT * FROM users`;
    
        this.db.all(sql, [], (err, rows) => {
            callback(err, rows);
        });
    }


}

module.exports = SQLiteDB;