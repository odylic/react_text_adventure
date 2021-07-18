const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('dotenv').config();
const PORT = 4000;
app.use(express.static(__dirname + '/public'));
const passport = require('passport');
require('./passport');
const sqlRouter = require('./server/routers/sqlRouter');

app.use('/sql', sqlRouter);

app.get('/ping', (req, res) => {
  res.json({message: 'pong'});
});

app.get('/test', (req, res) => {
  res.json({message: 'Hello from test endpoint'});
});

app.get('/api', (req, res) => {
  res.json({message: 'Hello from server this time'});
});

app.get('/app', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.get(
  '/auth/google',
  passport.authenticate('google', {scope: ['profile', 'email']})
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/failed'}),
  function (req, res) {
    res.redirect('/app');
  }
);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Listening on ${PORT} 🚀`);
});
