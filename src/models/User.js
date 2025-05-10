// src/models/User.js (ou usuario.js)
'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // definir associações aqui, ex:
      // User.hasMany(models.Requisicao, { foreignKey: 'id_solicitante', as: 'requisicoes' });
    }

    // Método para verificar a senha
    async isValidPassword(password) {
      return bcrypt.compare(password, this.senha_hash);
    }
  }
  User.init({
    id: { // Adicionar ID como UUID e PK
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    senha_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    papel: { // Pode ser ENUM ou uma FK para outra tabela de Papéis
      type: DataTypes.ENUM('SOLICITANTE', 'APROVADOR', 'ADMIN_ESTOQUE', 'ADMIN_SISTEMA'),
      allowNull: false,
      defaultValue: 'SOLICITANTE',
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    // createdAt e updatedAt são adicionados automaticamente pelo Sequelize se timestamps: true (default)
  }, {
    sequelize,
    modelName: 'User', // Nome do modelo (singular e PascalCase)
    tableName: 'usuarios', // Nome da tabela no banco (plural e snake_case)
    timestamps: true, // Habilita createdAt e updatedAt
    hooks: { // Hook para hashear a senha antes de salvar
      beforeSave: async (user) => {
        if (user.changed('senha_hash') || user.isNewRecord) { // Apenas hashear se a senha mudou ou é um novo usuário
          const salt = await bcrypt.genSalt(10);
          user.senha_hash = await bcrypt.hash(user.senha_hash, salt);
        }
      }
    }
  });
  return User;
};