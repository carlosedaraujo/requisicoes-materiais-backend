# Sistema de Gerenciamento de Requisições de Materiais - Backend

Backend do sistema de gerenciamento de requisições de materiais, desenvolvido em Node.js com Express.js e PostgreSQL.

## Tecnologias Principais

- Node.js
- Express.js
- Sequelize (ORM para PostgreSQL)
- PostgreSQL
- JWT (JSON Web Tokens) para autenticação
- Nodemailer para envio de e-mails
- ExcelJS para geração de relatórios

## Pré-requisitos

- Node.js (v18+ recomendado)
- Yarn ou NPM
- PostgreSQL (instalado localmente ou via Docker)
- Git

## Configuração Inicial

1. Clone o repositório: `git clone https://github.com/SEU_USUARIO/requisicoes-materiais-backend.git`
2. Entre no diretório: `cd requisicoes-materiais-backend`
3. Instale as dependências: `npm install` (ou `yarn install`)
4. Copie o arquivo de ambiente de exemplo: `cp .env.example .env`
5. Configure as variáveis de ambiente no arquivo `.env` (conexão com o banco, segredo JWT, etc.).
6. Certifique-se que o PostgreSQL está rodando e o banco de dados configurado no `.env` existe.
7. Rode as migrações do banco: `npx sequelize-cli db:migrate`
8. (Opcional) Rode os seeders: `npx sequelize-cli db:seed:all`

## Rodando o Projeto

- Em desenvolvimento: `npm run dev` (ou `yarn dev`)
- Em produção: `npm start` (ou `yarn start`)

## Estrutura de Pastas (Planejada)

- `src/`
  - `config/` (db, nodemailer, jwt)
  - `controllers/`
  - `middlewares/`
  - `models/` (Sequelize models)
  - `routes/`
  - `services/`
  - `utils/`
  - `validators/`
  - `app.js` (Express app setup)
  - `server.js` (HTTP server start)
- `migrations/` (Sequelize migrations)
- `seeders/` (Sequelize seeders)
