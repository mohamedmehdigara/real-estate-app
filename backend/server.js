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
const jwt = require('jsonwebtoken');



app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
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
  const token = jwt.sign({ username }, 'your_secret_key');

  // Send the token in the response
  res.cookie('auth_token', token, { httpOnly: true });
  localStorage.setItem('auth_token', token);

  res.json({ message: 'Login successful' });
  pool.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }

      // Check if a user record was found
      if (results.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Get the first user record from the results
      const user = results[0];

      // Compare the provided password with the password stored in the user record
      if (password === user.password) {
        // Authentication successful
        return res.json({ message: 'Login successful' });
      } else {
        // Authentication failed
        return res.status(401).json({ message: 'Invalid username or password' });
      }
    }
  );
});


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


  
  
// ... other imports and code ...


// Add the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ... other server configurations and routes ...
