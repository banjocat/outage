const express = require('express');
const router = express.Router();
const passport = require('passport');
const ensureLogin = require('connect-ensure-login').ensureLoggedIn;

router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: `${process.env.reactjs_url}/login` }),
  function(req, res) {
    // Successful authentication, redirect home.
      req.session.cookie.expires = false;
      res.redirect(`${process.env.reactjs_url}/`);
  });

router.get('/auth/user', ensureLogin(), (req, res) => {
    res.status(200).jsonp(req.user);
});

router.get('/auth/user/:field', ensureLogin(), (req, res) => {
    res.status(200).jsonp(req.user[req.params.field]);
});

router.get('/auth/user/logged/in', (req, res) => {
    if (req.user) {
        res.status(200).send('yes');
        console.log('logged in');
    } else {
        res.status(200).send('no');
        console.log('not logged in');
    }
});


module.exports = router;
