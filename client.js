const {Sequlize} = require('sequelize');

const connect = new Sequelize({
    dialect: 'sqlite',
    storage: 'Banco_Biblioteca.sdb'
  });

  try {
    connect.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }