const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

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
        let dataBody = [];
        req.on("data", (chunk) => {
          // console.log(chunk)
          dataBody.push(chunk);
          // console.log( dataBody)
        });
          req.on("end", () => {
      const rawData = Buffer.concat(dataBody).toString();
      const cleanData = queryString.parse(rawData);

      console.log(cleanData);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <div>
          <h1>Welcome, ${cleanData.userName}</h1>
          <p>Your password (${cleanData.password}) is saved with us</p>
        </div>
      `);
    });
        
      }
      
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
