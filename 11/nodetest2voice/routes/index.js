var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voice Recording Demo' });
});

/* GET voice recording page */
router.get('/voicerecord', function(req, res)
{
    res.render('record', {title : 'Record your voice'});
});

module.exports = router;