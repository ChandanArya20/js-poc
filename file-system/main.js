const fs = require("fs")

// const resu = fs.writeFile('./data.txt', "I am Chandan",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Data writen to file successfully");
//     }
// })

// const resu = fs.appendFile('./data.txt', "I am Chandan\n",(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("Data writen to file successfully");
//         }
//     })


fs.readFile('./data.txt','UTF-8',(err, res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})

