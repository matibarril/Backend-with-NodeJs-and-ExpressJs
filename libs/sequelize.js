const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setUpModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  // dialect: 'mysql',
  dialect: 'postgres',
  // logging: true,
});

setUpModels(sequelize);

// sequelize.sync();

module.exports = sequelize;
