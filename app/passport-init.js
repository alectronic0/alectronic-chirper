var Localstrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');

module.exports = function(passport){

  passport.serializeUser(function(user, done) {
      console.log('serializing user:',user.username);
      done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          console.log('deserializing user:',user.username);
          done(err, user);
      });
  });


  passport.use('login', new Localstrategy({ passReqToCallback: true },
    function(req, username, password, done){

      User.findOne({'username': username}, function(err, user){
        if(err){
          console.log('ERROR',err);
          return done(err,false);
        }
        if(!user){
          console.log('ERROR', username + 'SIGN ME IN !!');
          return done('user not found',null);
        }

        if(!isValidPassword(user,password)){ return done('BAD PASSWORD',null) }
        console.log('successfull sign in');
        return done(null,user);
      });
  }));

  passport.use('reg', new Localstrategy({ passReqToCallback: true },
    function(req, username, password, done){
      console.log(username,password);
      User.findOne({'username': username}, function(err, user){
      if(err){
        console.log('ERROR',err);
        return done(err,false);
      }
      if(user){
        console.log('ERROR',username.username + 'ALREADY EXISTS!!');
        return done('user found',null);
      }
      var user = new User();
      user.username = username;
      user.password = createHash(password);
      user.save(function(err, user){
        if(err){return done(err,false);}
        console.log("USER SignedUp= " + user);
        return done(null, user);
      });
    });
  }));

  var isValidPassword = function(user, password){return bCrypt.compareSync(password,user.password);}
  var createHash = function(password){return bCrypt.hashSync(password,bCrypt.genSaltSync(10),null);}
}
