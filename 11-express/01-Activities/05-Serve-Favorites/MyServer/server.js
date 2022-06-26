// Dependencies
const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = 8080;

const readHTMLFile = (route, callback) => {
  console.log("ROUTE ", route);
  fs.readFile(`${__dirname}/${route}.html`, callback);
};

// Create a function for handling the requests and responses coming into our server
const handleRequest = (req, res) => {
  const path = req.url;
  let route = "404";

  switch (path) {
    case "/":
      route = "index";
      break;
    case "/favorite-css":
      route = "favorite-css";
      break;
    case "/favorite-foods":
      route = "favorite-foods";
      break;
    case "/favorite-movies":
      route = "favorite-movies";
      break;
    case "/favicon.ico":
      res.writeHead(204, { "Content-Type": "text/html" });
      res.end();
      break;
    default:
      break;
  }

  readHTMLFile(route, (err, data) => {
    if (err) throw err;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
};

// Create our server
const server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
