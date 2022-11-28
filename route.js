function requestHandler(req, res) {
  const { url, method } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(
      "<html><head><title>Home Route</title></head><body><h1>Hello from Assignment!</h1>"
    );
    res.write(
      '<form action="/createUser" method="POST"><input type="text" name="user" /><button type="submit">Send</button></form>'
    );
    res.write("</body></html>");
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<html>");
    res.write("<head><title>Users Route</title></head>");
    res.write("<body><ul><li>User 1</li></ul></body>");
    res.write("</html");
  }
  if (url === "/createUser" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      user = Buffer.concat(body).toString();
      console.log(user.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
    return;
  }
  res.end();
}

module.exports = {
  handler: requestHandler,
};
