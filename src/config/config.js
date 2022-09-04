require('dotenv').config()


module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'itu190982',
    database: process.env.DB_NAME || 'alkemy_Challenge',
    host: process.env.DB_HOST || 'localhost',
    // dialect: process.env.DB_DIALECT
    dialect: process.env.DB_DIALECT || 'postgres',
    port: 5432
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
}


