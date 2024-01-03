const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const query = `SELECT * FROM post`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  let text = req.body.text;
  console.log("text",text)
  let sqlText = `
    INSERT INTO "post" ("text")
    VALUES ($1);
    `;

  pool
    .query(sqlText, [text])
    .then((result) => {
      console.log("Update in database");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
    let idToDelete = req.params.id;
    let sqlText = `
        DELETE FROM "post" WHERE "id" = $1;
        `;
    pool
      .query(sqlText, [idToDelete])
      .then((result) => {
        console.log("Deleted from database ", idToDelete);
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
});

module.exports = router;
