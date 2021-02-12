const express = require('express');
const app = express();
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const { PORT = 4000 } = process.env;

app.get('/', (req, res, next) => {
  return res.json({ message: 'server running' });
});

// Routes

app.use('/user', userRoutes);

app.get('/*', (req, res, next) => {
  const error = new Error('Page Not Found');
  error.statusCode = 404;
  return next(error);
});

// Handle Error
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  return res.json({ message: error.message || 'An unexpected error occurred!' });
});

app.listen(PORT, () => {
  console.warn(`Server listen http://localhost:${PORT}`);
});
