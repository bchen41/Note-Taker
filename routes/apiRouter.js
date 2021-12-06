const path = require("path");
let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const apiRouter = require("express").Router();

apiRouter.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
  res.json(db);
});

apiRouter.post("/notes", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    db.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
    res.send(`${req.method} Note Added`);
  }
});

module.exports = apiRouter;
