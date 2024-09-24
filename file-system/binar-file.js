const fs = require("fs");

const filePath = "./VID_20240822_104310_212.mp4.mkv";
console.log(1);

console.time("File Operation Time");

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile("./kalki_copy.mp4", data, err => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Data copied successfully");
            console.timeEnd("File Operation Time"); // End timing after the file is written
        });
    }
});

console.log(2);
