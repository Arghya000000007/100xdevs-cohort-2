const fs = require("fs");
function expensiveOperation(iterations) {
  for (let i = 0; i < iterations; i++) {}
  console.log("Expensive operation completed");
}

fs.readFile("3-read-from-file.md", "utf8", function (err, data) {
  if (err) {
    reject(err);
    return;
  }
  console.log(data);
});
expensiveOperation(1000000000);
console.log(
  "This message is logged after initiating file read and expensive operation"
);
