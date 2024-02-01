const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.writeFile(
    "a.txt",
    data.replace(/\s+/g, " ").trim(),
    {
      flag: "w",
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
});
