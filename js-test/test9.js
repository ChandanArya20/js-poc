let arr=[1,2,3,4]
let person={
    name:"Chandan",
    age:22
}
let add = (a,b)=>a+b


// console.log( arr);
// console.log( arr.toString());
// console.log(typeof arr);

// console.log( person);
// console.log( person.toString());
// console.log(typeof person);

// console.log( add);
// console.log( add.toString());
// console.log(typeof add);

let a=undefined
let b=4

let ab = a && b
let boolab = Boolean(a && b)

let boolab2 = Boolean(a | b)

console.log(ab);
console.log(boolab); 
console.log(boolab2);

const result  = eval(`

        const add = (a, b)=>a+b
        let rst = add(10,12)
        console.log("ressllt is here");

        rst
    `)

console.log(result);

console.log("😊😊❤️😍👍😂😂😂");

    