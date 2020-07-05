var Sequelize = require('sequelize');
var db = require('../database');
var Review = require('./users');
var Order = require('./orders');
var crypto = require('crypto');

var User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  rol: {
    type: Sequelize.ENUM,
    values: ['user', 'admin'],
    defaultValue: 'user',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    set(value) {
      const rSalt = User.randomSalt();
      this.setDataValue('salt', rSalt);
      this.setDataValue(
        'password',
        crypto
          .createHmac('sha1', this.salt)
          .update(value)
          .digest('hex'),
      );
    },
  },
  salt: {
    type: Sequelize.STRING,
  },
});

User.randomSalt = function() {
  return crypto.randomBytes(20).toString('hex');
};

User.prototype.checkPassword = function(password) {
  return (
    crypto
      .createHmac('sha1', this.salt)
      .update(password)
      .digest('hex') === this.password
  );
};

module.exports = User;
