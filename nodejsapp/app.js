const { format } = require("date-fns");
 
// GitHub Actions passes arguments via process.argv
const name = process.argv[2] || "World";
 
// Print greeting
console.log(`Hello ${name}!`);
 
// Get current time
const time = format(new Date(), "yyyy-MM-dd HH:mm:ss");
 
// Send output back to GitHub Actions
const fs = require("fs");
fs.appendFileSync(process.env.GITHUB_OUTPUT, `time=${time}\n`);