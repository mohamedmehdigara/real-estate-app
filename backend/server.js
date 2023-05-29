const express = require('express');
const app = express();
const port = 3000; // Change the port number if desired
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');


const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'your_database_name' // Replace with your database name
});

// Use the pool to execute queries
const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};



app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.set('pool', pool);

app.post('/api/register', async (req, res) => {
  const { username, password, additionalData } = req.body;

  try {
    // Insert the user data into the database
    const insertQuery = 'INSERT INTO users (username, password, additionalData) VALUES (?, ?, ?)';
    await executeQuery(insertQuery, [username, password, additionalData]);

    // Send a success response
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.log(error);

    // Send an error response
    res.status(500).json({ message: 'Error occurred during registration' });
  }
});



// Assuming you have already set up your Express app and connected to your database

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Perform necessary authentication logic here
  // This can include querying the database to check if the username and password match

  // Example pseudo-code for authentication logic
  if (username === 'admin' && password === 'password') {
    // Authentication successful
    res.json({ message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

  
  
// ... other imports and code ...


// Add the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ... other server configurations and routes ...
