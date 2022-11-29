const mainDir = require("./util/path");

const path = require("path");

const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/users", (req, res) => {
  res.sendFile(path.join(mainDir, "views", "users.html"));
});
