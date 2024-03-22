const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.use(routes);

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
