const express = require('express');
const app = express();
const port = 3000; // Change the port number if desired
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'your-database-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});


app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.set('pool', pool);

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
  
    // Perform user registration logic here, e.g., insert the user data into the database
  
    res.status(200).json({ message: 'Registration successful' });
  });
  