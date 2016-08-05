var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Post = mongoose.model('Post');

router.use(function(req,res,next){
  if(req.method === "GET"){return next();}

  if(!req.isAuthenticated()){return res.redirect('/#login')}

  return next();
});

router.route('/posts')
  //return all posts
  .get(function(reg,res){
    Post.find(function(err,data){
      if(err){ return res.send(500,err);}
      return res.send(data);
    })
    //res.send({message:'TODO return all posts'})
  })
  .post(function(req,res){
      var post = new Post();
      post.text = req.body.text;
      post.username = req.body.username;

      post.save(function(err,post){
        if(err){ return res.send(500,err);}
        return res.json(post);
      });
    //res.send({message:'TODO Create a new Post'})
  });


router.route('/posts/:id')

  .get(function(req,res){
      Post.findById(req.params.id,function(err,post){
        if(err){ return res.send(500,err);}
        return res.json(post);
      });
  })

  .put(function(req,res){
    Post.findById(req.params.id,function(err,post){
      if(err){ return res.send(500,err);}
      post.username = req.body.created_by;
      post.text = req.body.text;

      post.save(function(err,post){
        if(err){ return res.send(500,err);}
        res.json(post);
      });
    });
  })


  .delete(function(req,res){
    Post.remove({
        _id: req.prams.id
    }, function(err){
      if(err){res.send(err);}
      res.json("deleted:(");
    });
  });

module.exports = router;
