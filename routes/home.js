const express = require("express");

const route = express();

route.get("/", (req, res) => {
  res.render("ejs/home", { pageTitle: "Home Page" });
});

const users = [];

route.post("/", (req, res) => {
  users.push({ user_name: req.body.user_name });
  console.log(users);
  res.redirect("/users");
});

module.exports = { routes: route, users: users };
