const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:idparam', (req, res) => {
  // Add query to get individual movie details
  console.log('in movie details GET', req.params.idParam);
  const queryText = `SELECT * FROM movies WHERE id = 1`;
  pool.query(queryText)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500)
      });
});

module.exports = router;