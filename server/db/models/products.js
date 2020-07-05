var Sequelize = require('sequelize');
var db = require('../database');

var Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

Product.prototype.getRating = function() {
  return;
};

module.exports = Product;
