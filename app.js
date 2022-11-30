const mainDir = require("./util/path");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const homeData = require("./routes/home");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(homeData.routes);
app.use(userRoutes);

app.listen(3000, (req, res) => {
  console.log("Server is up and running");
});
