const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;
const UserModel = require('../models/User');


passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${process.env.CALLBACK_URL}/auth/github/callback`
},
    (accessToken, refreshToken, profile, done) => {
        UserModel.findOneAndUpdate({githubId: profile.id},
            {
                githubId: profile.id,
                email: profile._json.email,
                avatar_url: profile._json.avatar_url,
                organization_url: profile._json.organizations_url,
                name: profile._json.name,

            }, 
            {upsert: true},
            (err, user) => {
                if (err) {
                    console.log(err);
                }
                return done(err, user);
            });
    })
);
passport.serializeUser(function(user, done) {
  console.log('user.id', user.id);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('deserialize');
  UserModel.findById(id, (err, user) => {
      console.log('user', user);
      done(err, user);
  });
});


module.exports = passport;
