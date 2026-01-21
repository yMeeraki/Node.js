const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("html/form.html", "utf-8", (error, data) => {
    if (error) {
        res.writeHead(500, { "content-type": "text/plain" });
      res.write("ERROR");
      res.end();
    } else {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
      } else if (req.url === "/submit") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(`
    <div>
     <h1>Data Submitted</h1>
    </div>
    `);
      }
      res.end();
    }
  });

});

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(`
//     <form action="/submit" method="POST">
//      <input type="text" name="userName" id="userName" placeholder="Enter Name">
//       <input type="password" name="password" id="password" placeholder="Enter Password">

//       <button>Click Me</button>
//     </form>
//     `);
//   } else if (req.url === "/submit") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(`
//     <div>
//      <h1>Data Submitted</h1>
//     </div>
//     `);
//   }
//   res.end();
// });

server.listen(3200);
