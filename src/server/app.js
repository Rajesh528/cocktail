// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();
console.log('MongoDB URI:', process.env.MONGODB_URI); // Debugging line

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

const uri = process.env.MONGODB_URI;
console.log(uri)


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection failed:', err.message);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Import routes (add these later)
// app.use('/api/donors', require('./routes/donors'));
// app.use('/api/collectors', require('./routes/collectors'));
// app.use('/api/sponsors', require('./routes/sponsors'));
// app.use('/api/products', require('./routes/products'));
// backend/app.js

app.use('/api/donors', require('./routes/donorRoute'));


module.exports = app;
