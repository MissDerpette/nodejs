const express = require('express');
const SQLiteDB = require('./db');
const app = express();
const db = new SQLiteDB('./mydb.sqlite');

app.use(express.json());


//API Endpoints
app.post('/users', (req, res) => {
    console.log(req.body)
    db.createUser(req.body, (err, data) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/users', (req, res) => {
    db.getAllUsers((err, rows) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(200).json(rows);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});