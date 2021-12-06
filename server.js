const express = require("express");
const htmlRouter = require("./routes/htmlRouter");
const apiRouter = require("./routes/apiRouter");

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", htmlRouter);
app.use("/api", apiRouter);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
