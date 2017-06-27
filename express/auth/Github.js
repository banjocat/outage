const passport = require('passport');
const githubStrategy = require('passport-github').Strategy;
const UserModel = require('../models/User');


passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `${process.env.CALLBACK_URL}/auth/github/callback`
},
    (accessToken, refreshToken, profile, done) => {
        console.log(profile._json);
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
  // for the time being tou can serialize the user 
  // object {accessToken: accessToken, profile: profile }
  // In the real app you might be storing on the id like user.profile.id 
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // If you are storing the whole user on session we can just pass to the done method, 
  // But if you are storing the user id you need to query your db and get the user 
  //object and pass to done() 
  done(null, user);
});

module.exports = passport;
