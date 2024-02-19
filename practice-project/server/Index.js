const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET || 'cdwqcdxyqewfgdjvxcuqfycfvcqyxgqgfkhkcbvhyqcvhvjcsdyfjdxbobqfdvcyhxvyffgdkjsbdcuvu';

app.use(express.json());
app.use(cors())

// Sample user data (in a real app, fetch from a database)
const users = [
  {
    id: 1,
    username: 'wareed.keyani@test.com',
    password: 'test@123', 
  },
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Received login request:', { username, password });

  // Find user by username
  const user = users.find((u) => u.username === username);

if (user) {
    console.log('Login successful for user:', user);
    // Create a JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h', algorithm: 'HS256' });
  
    res.json({ token });
  } else {
    console.log('Login failed for user:', user);
    res.status(401).json({ error: 'Authentication failed. Invalid username or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});