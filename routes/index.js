var express = require('express');
var router = express.Router();
var parser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  const ua = parser(req.headers['user-agent']);
  console.log(JSON.stringify(ua, null, '  '));
  res.render('index', { title: 'Express' });
});

module.exports = router;
