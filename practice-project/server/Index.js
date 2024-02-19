const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET || 'cdwqcdxyqewfgdjvxcuqfycfvcqyxgqgfkhkcbvhyqcvhvjcsdyfjdxbobqfdvcyhxvyffgdkjsbdcuvu';

app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: 'wareed.keyani@test.com',
    password: '$2a$10$lgkFoxm.uleALj2gqp7ucuOwilU7jW7m2r2CG8uiTabh.ziQW17g6', 
  },
];

const plainPassword = 'test@123';
const hashedPassword = bcrypt.hashSync(plainPassword, 10);
console.log('Hashed password for test@123:', hashedPassword);

const comparisonResult = bcrypt.compareSync(plainPassword, hashedPassword);
console.log('Password comparison result for test@123:', comparisonResult);

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Received login request:', { username, password });

  const user = users.find((u) => u.username === username);

  if (user) {
    console.log('User found:', user);
    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log('Provided password:', password);
    console.log('Hashed password:', user.password);
    console.log('Password comparison result:', passwordMatch);

    if (passwordMatch) {
      console.log('Login successful for user:', user);
      const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
        expiresIn: '1h',
        algorithm: 'HS256',
      });

      res.json({ token });
    } else {
      console.log('Login failed for user:', user);
      res.status(401).json({ error: 'Authentication failed. Invalid username or password.' });
    }
  } else {
    console.log('User not found for username:', username);
    res.status(401).json({ error: 'Authentication failed. Invalid username or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


