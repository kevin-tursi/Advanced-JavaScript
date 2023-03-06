// ADVANCED ARRAYS

let array = [1, 2, 10, 16];

const double = []

const newArray = array.forEach(num => {
    double.push(num * 2);
})

console.log('forEach', double); // [2, 4, 20, 32]




// MAP

const mapArray = array.map(num => num * 2);

console.log('map', mapArray); // [2, 4, 20, 32]





// FILTER

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray); // [10, 16]





// REDUCE
// returns accumulator + num in this instance
// accumulator is set after the function: in this instance it is 0

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray); // 29

// to show how the reduce function with accumulator works when mapping through here
const explanation =
    'the logic goes as follows ' +
    'accumulator(0) + num(1) = 1' +
    'accumulator(1) + num(2) = 3' +
    'accumulator(3) + num(10) = 13' +
    'accumulator(13) + num(16) = 29'

