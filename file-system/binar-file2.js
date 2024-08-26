const fs = require("fs")

// Paths to the source and destination files
const sourceFilePath = "./VID_20240822_104310_212.mp4.mkv"
const destinationFilePath = "./kalki_copy.mp4"

// Create read and write streams
const readStream = fs.createReadStream(sourceFilePath)
const writeStream = fs.createWriteStream(destinationFilePath)

// Pipe the read stream to the write stream
readStream.pipe(writeStream)


writeStream.on("finish", () => {
    console.log("File has been copied successfully using streams.")
})

readStream.on("error", (err) => {
    console.error("Error reading file:", err)
})

writeStream.on("error", (err) => {
    console.error("Error writing file:", err)
})


