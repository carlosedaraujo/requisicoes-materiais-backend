// src/config/database.js
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      // ssl: {
      //   require: true, // Configurar SSL se necessário para produção
      //   rejectUnauthorized: false // Cuidado com isso em produção
      // }
    },
    logging: console.log, // Para ver as queries SQL geradas
  },
  test: {
    username: process.env.DB_USER_TEST || process.env.DB_USER,
    password: process.env.DB_PASSWORD_TEST || process.env.DB_PASSWORD,
    database: process.env.DB_NAME_TEST || `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST_TEST || process.env.DB_HOST,
    port: process.env.DB_PORT_TEST || process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  production: {
    username: process.env.DB_USER_PROD || process.env.DB_USER,
    password: process.env.DB_PASSWORD_PROD || process.env.DB_PASSWORD,
    database: process.env.DB_NAME_PROD || process.env.DB_NAME,
    host: process.env.DB_HOST_PROD || process.env.DB_HOST,
    port: process.env.DB_PORT_PROD || process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    // Adicionar aqui configurações de pool, SSL, etc., para produção
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false // Ajuste conforme o provedor do DB
    //   }
    // },
  }
};