const mysql = require("mysql2");
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'password',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

// Default response for anu other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

db.query(`SELECT * FROM candidates `, (err, rows) => {
    console.log(rows);
})