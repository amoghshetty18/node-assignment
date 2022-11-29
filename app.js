const express = require("express");

const app = express();

app.listen(3000);

app.use("/user", (req, res) => {
  console.log("User Route");
  res.send(`<html lang='en'>
<head>
    <title>User</title>
</head>
<body>
    <h1>User Route</h1>
</body>
</html>`);
});

// app.use("/", (req, res, next) => {
//   console.log("This is the first middleware");
//   next();
// });

app.use("/", (req, res, next) => {
  console.log("This is the second middleware");
  res.send(`
  <html lang="en">
<head>
    <title>Home</title>
</head>
<body>
    <h1>Home Route</h1>
</body>
</html>
  `);
});
