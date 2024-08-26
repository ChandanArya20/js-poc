const fs = require("fs")

const filePath = "./VID_20240822_104310_212.mp4.mkv"
console.log(1)

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err)
    } else {

        fs.writeFile("./kalki_copy.mp4", data, err=>{
            if(err){
                console.log(err)
                return
            }

            console.log("Data copied successfully");
        })
    }
})

console.log(2)
