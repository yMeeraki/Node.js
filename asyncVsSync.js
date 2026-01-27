const fs = require("fs");

// Async

// fs.readFile("text/kuk.txt", "utf-8", (error, data) => {
//   if (error) {
//     return false;
//   } else {
//     console.log(data);
//   }
// });
// console.log("End of Async Script");


//  Sync

const data = fs.readFileSync("text/kuk.txt", "utf-8")
console.log(data);
console.log("End of Sync Script");



// console.log("apple1");
// setTimeout(() => {
//   console.log("apple2");
// }, 2000);
// console.log("apple3");
