const express = require("express");

const route = express();
const homeData = require("./home");

route.get("/users", (req, res) => {
  // res.sendFile(path.join(mainDir, "views", "users.html"));
  const { users } = homeData;
  res.render("ejs/users", { pageTitle: "Users", users });
});

module.exports = route;
