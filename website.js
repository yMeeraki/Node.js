const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Header
  const collectHeaderData = fs.readFileSync("./html/header.html", "utf-8");

  // Footer
  const footerData = fs.readFileSync("./html/footer.html","utf-8")

  // let collectHeaderData
  // fs.readFile("./html/header.html", "utf-8", (error, headerData) => {
  //   if (error) {
  //     res.writeHead(404, {
  //       "content-type": "text/plain",
  //     });
  //     res.end("Header not found");
  //     return false;
  //   }
  //   else{
  //     collectHeaderData=headerData
  //   }
  // });

  let file = "/index";
  if (req.url != "/") {
    file = req.url;
  }
  
  if (req.url != "/style.css") {
    fs.readFile(`./html${file}.html`, "utf-8", (error, data) => {
      if (error) {
        res.writeHead(500, {
          message: "Internal Server Error",
          "content-type": "text/plain",
        });
        res.end("Internal Server Error");
        return false;
      } else {
        res.write(`${collectHeaderData} ${data} ${footerData}`);
        res.end();
      }
    });
  } else if (req.url == "/style.css") {
    fs.readFile("./html/style.css", "utf-8", (error, data) => {
      if (error) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("CSS Not Found");
        return false;
      } else {
        res.writeHead(200, { "content-type": "text/css" });
        // res.write(data);
        res.end(data);
      }
    });
  }
});

server.listen(3200);
