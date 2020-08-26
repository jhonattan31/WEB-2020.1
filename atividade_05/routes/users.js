var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

module.exports = router;
