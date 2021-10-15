const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
