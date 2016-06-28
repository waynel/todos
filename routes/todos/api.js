var express = require('express');
var router = express.Router();

var Todo = require('../../models/todos');

router.route('/')
  .get(function(req, res, next) {
    Todo.findAsync({})
    .then(function(todos) {
      res.json(todos);
    })
    .catch(next)
    .error(console.error);
  });

  module.exports = router
