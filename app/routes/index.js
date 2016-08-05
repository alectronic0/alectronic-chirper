var express = require('express');
var router = express.Router();
const { healthcheck, localHealth } = require('../health/healthcheck.js')


/* GET home page. */
router.get('/', function(req, res, next) {
//    console.log("request is " + req.user.username);
    res.render('index', { title: "Chirp"});
});

router.get('/health', healthcheck.configure({
checks: {
  localHealth: healthcheck.raw(() => {return localHealth() ? healthcheck.up() : healthcheck.down()}),
},
buildInfo: {}
}));

module.exports = router;
