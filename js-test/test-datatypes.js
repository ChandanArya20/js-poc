function add(a,b){
    return a+b;
}

function Person(name,age){
    this.name=name
    this.age=age
}

class Student{
    
    constructor(name, roll, clazz){
        this.name=name
        this.roll=roll
        this.clazz=clazz
        this.marks=null
    }
    
    name(params) {
        return name
    }
}

console.log(add(2,4))

const arr = [12,34]
const set = new Set([23,45,67])

const me=new Person('Chandan',22)
const arya = new Student('Arya', 32, '7th')
arya.marks=87;

console.log(typeof arr);
console.log(typeof add);
console.log(typeof 6);
console.log(typeof 'Chandan');
console.log(typeof false);
console.log(set);
console.log(typeof set);
console.log(typeof Number(6));
console.log(typeof Person);
console.log(typeof me);
console.log('class',typeof Student);
console.log(typeof arya);
console.log( arya.marks);





