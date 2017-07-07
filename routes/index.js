var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'meanapp' });
});

/* GET User html  page. */
router.get('/user', function(req, res, next) {
  //default use module
   res.render('home', { title: 'meanapp' });
});
router.get('/user/add', function(req, res, next) {
  //add
   res.render('home', { title: 'meanapp' });
});
router.get('/user/show/:id', function(req, res, next) {
  //show
   res.render('home', { title: 'meanapp' });
});
router.get('/user/edit/:id', function(req, res, next) {
  //edit
   res.render('home', { title: 'meanapp' });
});





module.exports = router;
