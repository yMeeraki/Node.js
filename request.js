const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <h1>HomePage</h1>
  <h2>Welcome</h2>
    `);
    res.end("");
  })
  .listen(5800);
