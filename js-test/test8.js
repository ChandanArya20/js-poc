// const Status={
//     ACTIVE:'ACTIVE',
//     PENDING:'PENDING',
//     FINISHED:'FINISHED'
// }

// console.log(Status.ACTIVE);
console.time('loop')

for(let i=1;i<100000;i++){
    // console.log(i); 
    if(i===50000){
        console.log("Half"); 
    }
}

console.timeEnd('loop')