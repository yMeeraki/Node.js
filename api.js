const http = require("http");

const userData = [
  {
    name: "Yukti",
    age: 30,
  },
  {
    name: "Vivek",
    age: 28,
  },
  {
    name: "Nuzhat",
    age: 28,
  },
];

http.createServer((req, res) => {
  res.setHeader("Content-Type","application/json")
  res.write(JSON.stringify(userData))
  res.end()
}).listen(4000);
