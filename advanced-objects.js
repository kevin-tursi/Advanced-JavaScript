// REFERENCE TYPE

let object1 = { value: 10 };
let object2 = object1; // this is referencing object 1 and saying "I want to be assigned whatever is inside object1"
let object3 = { value: 10 };

object1 === object2; // true
object1 === object3; // false
object1.value = 15;
object2.value; // 15
object3.value; // 10



// CONTEXT VS SCOPE
const scope = 'think local scope for variables in functions and global for accesible variables in a file'
const context = 'the object to which a function belongs'

// example of context
const object4 = {
    a: function () {
        console.log(this);
    }
}

console.log(object4.a());
// {a: function(){
//     console.log(this);
// }}


// INSTANTIATION
const instatiation = 'making a copy of an object and reusing the code';

//example of instatiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name} I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type) // this takes us up to the constructor of the Player and runs the constructor function of Player
        console.log('wizard', this)
    }
    play() {
        console.log(`Weeeeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'healer');
const wizard2 = new Wizard('Sean', 'Dark Magic');