const express = require('express');
const router = express.Router();
const Users = require('../db/models/users');
const Orders = require('../db/models/orders');
const passport = require('passport');

isAuthenticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user) return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User not authenticated',
    });
};
isAdmin = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user.rol === 'admin') return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User is not admin',
    });
};

router.get('/checkauth', isAuthenticated, function(req, res) {
  res.status(200).json({
    loggedin: true,
    message: 'User is authenticated',
    user: req.user,
  });
});

router.get('/', function(req, res) {
  Users.findAll().then(users => res.json(users));
});

router.get('/logout', function(req, res) {
  req.logout();
  res.json({ message: 'Logged out!' });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id).then(user => res.json(user));
});

router.post('/', (req, res) => {
  Users.create(req.body)
    .then(newUser => {
      res.json(newUser);
    })
    .catch(error => res.json(error));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return json({
        success: false,
        message: err.message,
        info,
      });
    }
    if (!user) {
      return res.json({
        success: false,
        info,
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.json(err);
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        info,
        user,
      });
    });
  })(req, res, next);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => user.update(req.body))
    .then(updatedUser => {
      res.json(updatedUser);
    });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Users.destroy({ where: { id: id } }).then(deletedUser => {
    res.json(deletedUser);
  });
});
router.get('/:id/orders', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => user.getOrders())
    .then(orders => res.json(orders));
});

module.exports = router;
