var express = require('express');
var router = express.Router();
var tests = require('../josndatas/test.json');
router.get('/', function (req, res, next) {
 res.send(tests)
});

// 영화 상세 페이지를 위한 코드
router.get('/:id', function (req, res, next) {
 var id = parseInt(req.params.id, 10)
 var test = tests.filter(function (test) {
 return test.id === id
 });
 res.send(test)
});
module.exports = router;