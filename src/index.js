const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const errorHandler = require('./utils/errorHandler');
const { sequelize } = require('./models'); // make sure Sequelize is initialized

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/health', (req, res) => res.send('OK'));

// API routes
app.use('/api', apiRoutes);

// Global error handler
app.use(errorHandler);

// ✅ Use Railway's assigned port OR fallback to local config
const PORT = process.env.PORT || ServerConfig.PORT || 4000;

// ✅ Authenticate DB first before starting server
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on PORT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
