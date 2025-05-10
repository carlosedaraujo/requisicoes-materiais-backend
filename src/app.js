// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// const authRoutes = require('./routes/authRoutes'); // Exemplo
// const productRoutes = require('./routes/productRoutes'); // Exemplo

const app = express();

// Middlewares
app.use(cors()); // Configurar origens permitidas em produção
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rotas de Teste Inicial
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API de Requisições de Materiais!' });
});

// TODO: Adicionar rotas principais
// app.use('/api/auth', authRoutes);
// app.use('/api/produtos', productRoutes);

// Middleware de tratamento de erros (exemplo básico)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo deu errado no servidor!', error: err.message });
});

module.exports = app;