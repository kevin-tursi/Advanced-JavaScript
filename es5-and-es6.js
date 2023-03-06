// LET + CONST

// let thisVariable = 'for variables that will change';
// const thatVariable = 'for variables that stay constant';

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel); // inside, true
}

console.log('outside', wizardLevel); // outside, false

// with let every time a variable is inside a curly bracket it creates a new scope. Therefore, wizardLevel = true inside and false outside

const player2 = 'bobby';
let experience2 = 100;
var wizardLevel2 = false;

if (experience2 > 90) {
    var wizardLevel2 = true;
    console.log('inside', wizardLevel2); // inside, true
}

console.log('outside', wizardLevel2); // outside, true

// with var (don't use it anymore) does not create scope inside the curly brackets unless it is a function. Therefore it changes both





// // DESCTRUCTURING

// const name = 'john snow'
// const obj = {
//     player3: 'bobby',
//     experience3: 100,
//     wizardLevel3: false
// }

// // const player3 = obj.player3;
// // const experience3 = obj.experience3;
// // let wizardLevel3 = obj.wizardLevel3;

// const { player3, experience3 } = obj;
// let { wizardLevel3 } = obj;

// console.log(player3, experience3); // 'bobby', 100
// console.log(wizardLevel3); // false



const a = 'Simon';
const b = true;
const c = {};

const obj = { a, b, c }; // don't need declaration for property and value when variables are already assigned a value so can just do {a, b, c}





// TEMPLATE STRINGS
// const name = 'Sally';
// const age = 34;
// const pet = 'horse';

// const greeting = 'Hello ' + name + ' you seem to be doing ' + greeting + '!';

const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!` // uses `` (back ticks) then put in an entire string your message and use ${} to access variables

// DEFAULT ARGUMENTS

function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`
}

// SYMBOL (creates a unique property for each)

let sym1 = Symbol(); // Symbol();
let sym2 = Symbol('foo'); // Symbol(foo);
let sym3 = Symbol('foo'); // Symbol(foo);

sym2 === sym3; // false (because symbols are completely unique can never be equal to each other)




// ARROW FUNCTIONS 

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b; //if single return can be on one line if more than one line of code in function put in curly brackets