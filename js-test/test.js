class Student{
    
    constructor(name, roll){
        this.name=name
        this.roll=roll
        this.marks=null
    }
    
    name(params) {
        return name
    }
}

const arya = new Student('Arya', 32)
arya.marks=87;
arya.class='7th'

Object.preventExtensions(arya)

arya.grade='A'


console.log(arya);
console.log(arya.trade);

console.log(Object.entries(arya))