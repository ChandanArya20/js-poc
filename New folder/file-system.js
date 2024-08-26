const fs = require("fs");
const system = require('os')

fs.appendFile("./data.txt", "I an Chandan\n", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Data written to file succesfully");
});



console.log(system.platform());

