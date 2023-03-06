// CLOSURES: a function ran. the function executed. its never going to execute again. 
// BUT its going to remember that there are references to those variables
// so the child scope always has access to the parent scope

const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunction = first();
newFunction();




// CURRYING - the process of converting a function that takes multiple arguments to taking each argument one at a time
// Makes it more specified now we can make the multiplyBy5 function

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(100)(2); // 200

const multiplyBy5 = curriedMultiply(5);





// COMPOSE
// the act of putting two functions together to form a third function where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); // 7
// const compose = (f, g) => (a) => f(g(5));
// const compose = (f, g) => (a) => f(sum(5));
// const compose = (f, g) => (a) => f(6);
// const compose = (f, g) => (a) => sum(6);
// const compose = (f, g) => (a) => 7;





// AVOIDING SIDE EFFECTS AND FUNCTIONAL PURITY

let a = 1;
function b() {
    a = 2; //this is a side effect as it is affecting the a variable outside of its scope
}

const functionalPurity = 'we want to avoid side effects in a function and ALWAYS return a value'
const determinism = 'we want the same inputs in a functional to always return the same value'
