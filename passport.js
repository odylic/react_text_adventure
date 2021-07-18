require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./server/models/sqlModel');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      const {displayName, id} = profile;
      const addUser = `
      INSERT INTO google_user (google_id, name)
      values ($1, $2)
      `;
      const newUser = [id, displayName];
      db.query(addUser, newUser).then((response) => {
        return done(null, profile);
      });
      return done(null, profile);
    }
  )
);
