var express = require('express');
var router = express.Router();
var Game = require('../public/javascripts/game')
/* GET home page. */
var game = new Game(2);

router.get('/', function(req, res, next) {
  res.render('index',
      {
          title: 'Express',
          game: game
      }
      );
});

module.exports = router;