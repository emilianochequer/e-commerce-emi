'use strict';

var config = require('../../config.json');
var Sequelize = require('sequelize');

// module.exports = new Sequelize(config.database, config);
module.exports = new Sequelize(
  process.env.DATABASE_URL || 'postgres://lostopos:example@pg:5432/ecommerce',
);
// module.exports = new Sequelize('ecommerce', 'lostopos', 'example', {
//   dialect: 'postgres',
// })

//
