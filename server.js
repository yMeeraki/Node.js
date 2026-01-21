// Basic Server

const http = require("http")
// const http2 = require("http")

http.createServer((req,res) => {
  res.setHeader("Content-Type","text/html")
  res.write("<h2>hello world</h2>")
  res.end("WOW!! OMG OMG")  
}).listen(2000)

// http2.createServer((req,res) => {
//   res.end("We!!!")
// }).listen(3000)