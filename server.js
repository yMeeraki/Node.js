// Basic Server

const http = require("http")
const http2 = require("http")

http.createServer((req,res) => {
  res.write("<h1>hello world</h1>")
  res.end("WOW!!")  
}).listen(2000)

http2.createServer((req,res) => {
  res.end("We!!!")
}).listen(3000)