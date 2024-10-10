const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  //   console.log(method);
  console.log(url);
  if (url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(
      JSON.stringify([
        { name: "Peter", age: 120, surname: "Pan", city: "Utopia" },
        { name: "Fridolin", age: 23, surname: "Heins", city: "Bielefeld" }
      ])
    );
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ message: "An error occurred" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
