var Sequelize = require('sequelize');
var db = require('../database');

var Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  tax: {
    type: Sequelize.INTEGER,
    defaultValue: 0.21,
  },
  discount: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['Uncreated', 'Created', 'Inprocess', 'Canceled', 'Completed']
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Order;
