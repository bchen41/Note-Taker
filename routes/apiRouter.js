const path = require("path");
let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const apiRouter = require("express").Router();

apiRouter.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
  res.json(db);
});

module.exports = apiRouter;
