var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  args={ title: 'Express',location:'home'};
  res.render('index', {args: args});
});

router.get('/blogs', function(req, res){
 var page = require('../modules/blogs');
 page.show(req, res, {location: "blogs"});
});

router.post('/blogs', function(req, res){
 var page = require('../modules/blogs');
 page.show(req, res, {location: "blogs"});
});

router.post('/user', function(req, res){
 var user=require("../modules/user");
 user.show(req, res, {location: "user"});
});

router.post('/label', function(req, res){
 var label = require("../modules/label");
 label.show(req, res, {location: "label"});
})

module.exports={router:router};
