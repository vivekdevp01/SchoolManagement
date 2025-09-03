
# School Management System

A modular Node.js project template for managing school data, built with best practices in mind. This project uses Express.js, Sequelize ORM, and a clean architecture to separate concerns and ensure maintainability.

## Project Structure

```
src/
  config/         # Configuration files (DB, server, logger)
  controllers/    # Handle incoming requests, call services, format responses
  errors/         # Custom error classes
  middlewares/    # Request validation, authentication, etc.
  migrations/     # Sequelize migration files
  models/         # Sequelize models
  repositories/   # Data access logic (ORM/queries)
  routes/         # API route definitions
  seeders/        # Sequelize seed data
  services/       # Business logic
  utils/          # Helper functions and utilities
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm
- A supported SQL database (e.g., MySQL, MariaDB, PostgreSQL)

### Setup

1. **Install dependencies:**
  ```
  npm install
  ```

2. **Environment variables:**
  Create a `.env` file in the root directory:
  ```
  PORT=3000
  ```

3. **Database configuration:**
  - Edit `src/config/config.json` with your DB credentials and dialect.

4. **Initialize Sequelize (if needed):**
  ```
  npx sequelize init
  ```

5. **Run migrations and seeders (if any):**
  ```
  npx sequelize db:migrate
  npx sequelize db:seed:all
  ```

6. **Start the development server:**
  ```
  npm run dev
  ```

## Scripts

- `npm run dev` – Start the server in development mode with auto-reload.

## Key Features

- Modular folder structure for scalability
- Centralized error handling
- Sequelize ORM for database management
- Ready for adding authentication, validation, and more
