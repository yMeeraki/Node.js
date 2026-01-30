const fs = require("fs");

const operation = process.argv[2];

if (operation == "write") {
  // Create
  const name = process.argv[3];
  const content = process.argv[4];
  fs.writeFileSync(`./files/${name}.txt`, content);
} else if (operation == "read") {
  // Read
  const name = process.argv[3];

  let data = fs.readFileSync(`./files/${name}.txt`, "utf-8");
  console.log(data);
} else if (operation == "update") {
  //  Update
  const name = process.argv[3];
  const newContent = process.argv[4];
  fs.appendFileSync(`./files/${name}.txt`, newContent);
  let data = fs.readFileSync(`./files/${name}.txt`, "utf-8");
  console.log(data);
} else if (operation == "delete") {
  // Delete
  const name = process.argv[3];
  let data = fs.unlinkSync(`./files/${name}.txt`);
  console.log("File deleted");
} else {
  console.log("Error: Write a operation!");
}
