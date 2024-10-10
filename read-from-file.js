const fs = require("fs");
const content = fs.readFileSync("output.txt");
console.log(content.toString());
