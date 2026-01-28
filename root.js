const http = require("http");
const userForm = require("./userForm.js");
const userDataSubmit = require("./userDataSubmit.js")

const server = http.createServer((req, res) => {
  res.writeHead(200,{"content-type":"text/html"})
  if(req.url === "/"){
    userForm(req, res);
  }
  else if(req.url === "/submit"){
    userDataSubmit(req,res)
  }
  res.end();
});

server.listen(3200);
