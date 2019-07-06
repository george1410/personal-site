var express = require('express');
var router = express.Router();
const twitter = require('../twitter/twitter');

router.get('/social', function(req, res, next) {
  twitter.getFollowers('george_mccarron')
    .then(data => res.json(data));
});

router.get('/test', function(req, res, next) {
  res.json('test!');
});

module.exports = router;
