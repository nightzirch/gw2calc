var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('conditions/index', { title: 'Conditions' });
});

module.exports = router;
