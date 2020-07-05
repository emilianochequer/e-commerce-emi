var Sequelize = require('sequelize');
var db = require('../database');

const OrderDetail = db.define('orderDetail', {
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  amount: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = OrderDetail;
