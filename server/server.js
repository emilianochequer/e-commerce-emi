const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const productsRoutes = require('./api/productsRoutes');
const session = require('express-session');
const usersRoutes = require('./api/usersRoutes');
const ordersRoutes = require('./api/ordersRoutes');
const categoriesRoutes = require('./api/categoriesRoutes');
const reviewsRoutes = require('./api/reviewsRoutes');
const db = require('./db/database');
const User = require('./db/models/users');

//require('./db/seed.js');

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(email, password, done) {
      console.log('email', email, 'password', password);
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, {
              message: 'El correo electrónico no existe.',
            });
          }
          if (!user.checkPassword(password)) {
            return done(null, false, {
              message: 'La contraseña es incorrecta.',
            });
          }
          return done(null, user);
        })
        .catch(err => {
          if (err) {
            return done(err);
          }
        });
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: '2127235837500284',
      clientSecret: '958b4e83f437c0d2990a5c819ac2a6a3',
      callbackURL: 'http://localhost:4000/auth/facebook/callback',
      profileFields: [
        'id',
        'displayName',
        'email',
        'birthday',
        'friends',
        'first_name',
        'last_name',
        'middle_name',
        'gender',
        'link',
      ],
    },
    function(accessToken, refreshToken, profile, done) {
      const user = profile._json;
      User.findOrCreate({
        where: { email: user.email },
        defaults: {
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
        },
      })
        .then(res => res[0])
        .then(user => done(null, user))
        .catch(err => done(err));
    },
  ),
);

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '570892773181-f9ml0fkv6rig4g1a5u2tq37fv8uiju2k.apps.googleusercontent.com',
      clientSecret: 'lDYZWjhmQ8Ywj80rrdeUjtDv',
      callbackURL: 'http://localhost:4000/auth/google/callback',
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile._json);
      const user = profile._json;
      User.findOrCreate({
        where: { email: user.emails[0].value },
        defaults: {
          firstName: user.name.givenName,
          lastName: user.name.familyName,
          email: user.emails[0].value,
        },
      })
        .then(res => res[0])
        .then(user => done(null, user))
        .catch(err => done(err));
    },
  ),
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

app.use(session({ secret: 'my secret string' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/reviews', reviewsRoutes);

app.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
  }),
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  }),
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

db
  .sync({ force: false })
  .then(function() {
    app.listen(process.env.PORT || 4000, function() {
      console.log('Server is listening on port 4000!');
    });
  })
  .catch(console.error);
