const express = require('express');
const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const router = express.Router();
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
            });
    })
);

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
      console.log('login completed.. redirect');
      res.redirect('/api/v1/outage');
  });

module.exports = router;
