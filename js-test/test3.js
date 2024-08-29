// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

// console.log("completed");

class Student{
    #name
    constructor(name, age, clazz){
        this.#name=name
        this.age=age
        this.clazz=clazz
    }

    getName(){
        return this.#name
    }
}

const stud = new Student("Chandan", 22, "BCA")

console.log(stud);

console.log(stud.#name);
console.log(stud.age);
console.log(stud.clazz);

console.log("stud.getName()", stud.getName());




