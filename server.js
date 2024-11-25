// server.js
const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Item = require('./models/Item');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Register User
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    const savedUser = await newUser.save();
    console.log('Registered User:', savedUser); // Log the saved user data

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'Failed to register user' });
  }
});


// Login User
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login attempt with unregistered email:', email);
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User Found:', user); // Log the user data retrieved from MongoDB

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid login credentials for user:', email);
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    console.log('Login successful for user:', user.email); // Log a successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Failed to log in' });
  }
});

// Get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// Create item
app.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Update item
app.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// Delete item
app.delete('/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));