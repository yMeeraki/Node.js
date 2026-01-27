const fs = require("fs")

fs.readFile("text/kuk.txt","utf-8",(error,data) => {
  if(error){
    return false
  }
  else{
    console.log(data)
  }
})
console.log("End of Async Script");




// console.log("apple1");
// setTimeout(() => {
//   console.log("apple2");
// }, 2000);
// console.log("apple3");
