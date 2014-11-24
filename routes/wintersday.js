var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('wintersday/index', { title: 'Wintersday Gifts' });
});

router.get('/about', function(req, res) {
  res.render('wintersday/about', { title: 'Wintersday Gifts' });
});

module.exports = router;
