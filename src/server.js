// src/server.js
const app = require('./app');
const { sequelize } = require('./models'); // Garante que o index.js dos modelos seja carregado

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // await sequelize.sync({ force: true }); // CUIDADO: 'force: true' apaga e recria tabelas. Use apenas em dev inicial.
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Ambiente: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
    process.exit(1); // Sai do processo se não conseguir conectar ao DB
  }
};

startServer();