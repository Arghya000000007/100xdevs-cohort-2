const fs = require("fs");

fs.writeFile(
  "4-write-to-file.md",
  "\n\nI am adding another line to this",
  {
    flag: "a",
    encoding: "utf-8",
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successful");
    }
  }
);
