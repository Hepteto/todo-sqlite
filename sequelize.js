const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Alterado para SQLite na memória
  logging: false // Desativa os logs do Sequelize
});


module.exports = sequelize;
