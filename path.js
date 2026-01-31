const path = require('path')

const file = "text/kuk.txt"

console.log(path.extname(file));
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.resolve("text","kuk.txt"));
console.log(path.isAbsolute(file));


console.log(__dirname);
console.log(__filename);


