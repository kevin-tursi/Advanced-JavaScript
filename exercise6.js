//Evaluate these:
//#1
[2] === [2] // false
// { } === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2; // 4
const object4 = { a: 5 }; // 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Mamal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Animal extends Mamal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`MOOOOOOOOOOOOO my name is ${this.name}, I am a ${this.type}, and my color is ${this.color}!`);
    }
}

const cow = new Animal('Becky', 'cow', 'brown');
console.log(cow);