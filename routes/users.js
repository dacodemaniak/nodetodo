var express = require('express');
var router = express.Router();
var Users = require('./../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * GET utilisateur spécifique
 */
router.get('/:login/:password', function(request, response, next) {
  Users.getUser(
    request.params.login, // Paramètre 1 (:login)
    request.params.password, // Paramètre 2 (:password)
    function(err, rows) { // Paramètre 3 : alimenté par le modèle Users
      if (err) {
          response.json(err);
      } else {
          response.json(rows);
      }
  });
});

module.exports = router;
