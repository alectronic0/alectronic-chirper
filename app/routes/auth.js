var express = require('express');
var router = express.Router();

module.exports = function(passport){

  router.get('/success', function(req,res){
    res.send({state: 'success', user: req.user ? req.user: null});
  });

  router.get('/failure', function(req,res){
    res.send({state: 'failure', user: null, message: "Invalid username or password"});
  });

  router.get('/logout', function(req, res){
      console.log("SIGN OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      req.logout();
      res.redirect('/');
  });

  router.post('/login', passport.authenticate('login',{
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
  }));

  router.post('/reg', passport.authenticate('reg',{
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
  }));



  return router;
}
