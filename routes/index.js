var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Guild Wars 2 Calculators' });
});

module.exports = router;
