const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get individual movie details
  console.log('in details GET', req.params.id);
  const queryText = `SELECT * FROM movies WHERE id = $1`; // 1 is currently hardcoded
  pool.query(queryText, [req.params.id])  // use that to sanitze
      .then((result) => {
          console.log(result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500)
      });
});

module.exports = router;