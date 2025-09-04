require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Abcd@1234",
    database: process.env.DB_NAME || "schoolmanagement",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
  },

  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Abcd@1234",
    database: process.env.DB_NAME || "schoolmanagement_test",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
  },

  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "XIFeCWGaBKYHqOBAeLFkxtwsZhyQIXHy",
    database: process.env.DB_NAME || "railway",
    host: process.env.DB_HOST || "maglev.proxy.rlwy.net",
    port: process.env.DB_PORT || 23792,
    dialect: process.env.DB_DIALECT || "mysql",
  },
};
