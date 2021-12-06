const path = require("path");
let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const apiRouter = require("express").Router();

module.exports = apiRouter;
