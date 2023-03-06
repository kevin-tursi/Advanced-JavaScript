// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

'       🐢' // turtle = turtle.padStart(9);
'       🐇' // rabbit = rabbit.padStart(9);
'     ||<- Start line'

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); // '🐢======='

// second parameter specifies the string that should be used for padding so this makes sense

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(' ')).join(' ');
Object.entries(obj) // ['my', 'name'] ['is', 'Rudolph'] ['the', 'raindeer']
Object.entries(obj).map(value => value.join(' ')) // ['my name', 'is Rudolf', 'the raindeer']
Object.entries(obj).map(value => value.join(' ')).join(' ') // 'my name is Rudolf the raindeer'