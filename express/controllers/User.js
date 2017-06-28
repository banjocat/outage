const express = require('express');
const router = express.Router();
const passport = require('passport');
const ensureLogin = require('connect-ensure-login').ensureLoggedIn;

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
      console.log('login completed.. redirect');
      res.redirect('/api/v1/outage');
  });

router.get('/auth/user', ensureLogin(), (req, res) => {
    res.status(200).jsonp(req.user);
});

router.get('/auth/user/:field', ensureLogin(), (req, res) => {
    res.status(200).jsonp(req.user[req.params.field]);
});

router.get('/auth/user/logged/in', (req, res) => {
    const result = req.user ? 'yes' : 'no'
    res.status(200).send(result);
});


module.exports = router;
