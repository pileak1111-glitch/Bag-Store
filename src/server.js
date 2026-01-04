
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';


// Create an express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Replace with your MySQL username
  password: '',      // Replace with your MySQL password
  database: 'item'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});
// 1. Create
app.post('/users', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
      if (err) throw err;
      res.send({ message: 'User created successfully', id: result.insertId });
    });
  });