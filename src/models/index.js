const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { ...config.params, operatorsAliases: Sequelize.Op },
);
const db = {};

fs.readdirSync(__dirname)
  .filter(file => !_.isEqual(file.indexOf('.'), 0) && !_.isEqual(file, 'index.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({
  force: false,
}).done(() => db);

module.exports = db;
