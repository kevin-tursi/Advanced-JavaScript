// change everything below to the newer Javascript!

// let + const
let a1 = 'test';
const b1 = true;
const c1 = 789;
a1 = 'test2';


// Destructuring
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person;


// Object properties
var a2 = 'test';
var b2 = true;
var c2 = 789;

var okObj = { a2, b2, c2 };


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const messageBest = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}