const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get individual movie details
  console.log('in details GET', req.params.id);
  const queryText = `SELECT * FROM "movies" 
                    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id" 
                    JOIN "genres" ON "genres"."id" = "movies_genres"."genres_id"
                    WHERE "movies"."id" = $1`;
  // need to rewrite this to include genre table
  pool.query(queryText, [req.params.id])  // use that to sanitze
      .then((result) => {
          console.log('result.rows', result.rows);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500)
      });
});

module.exports = router;