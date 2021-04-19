var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Raphael Arar',
    tagline: 'Interfaces & Systems'
  });
});

module.exports = router;
