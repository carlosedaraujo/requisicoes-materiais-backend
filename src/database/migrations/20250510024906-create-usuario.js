// Exemplo de como a migration deve ficar
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { // Nome da tabela
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      papel: {
        type: Sequelize.ENUM('SOLICITANTE', 'APROVADOR', 'ADMIN_ESTOQUE', 'ADMIN_SISTEMA'),
        allowNull: false,
        defaultValue: 'SOLICITANTE',
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: { // Sequelize gerencia isso, mas é bom definir explicitamente
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};