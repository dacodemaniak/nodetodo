var express = require('express');
var router = express.Router();
var Stories = require('./../models/Stories');

/**
 * GET Les user stories
 */
router.get('/:userId?', function(request, response, next) {
    if (request.params.userId) {
        Stories.getByUserId(
            request.params.userId, // Paramètre 1 (:id)
            function(err, rows) { // Paramètre 2 : alimenté par le modèle Users
              if (err) {
                  response.json(err);
              } else {
                  response.json(rows);
              }
          });
    } else {
        Stories.getAll(
            function(err, rows) { // Paramètre 2 : alimenté par le modèle Users
              if (err) {
                  response.json(err);
              } else {
                  response.json(rows);
              }
          });        
    }

});

module.exports = router;
