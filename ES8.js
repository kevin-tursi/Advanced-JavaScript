// STRING PADDING (adds padding to make the string as long as the specified amount of characters)

'Turtle'.padStart(10); // '    Turtle'
'Turtle'.padEnd(10); // 'Turtle    '




// TRAILING COMMAS IN FUNCTIONS, PARAMETERED LISTS, AND CALLS

const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,); // 1




// OBJECT.VALUES AND OBJECT.ENTRIES

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr. Grinch'
}

// Before .value and .assign
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}); // username0 Santa // username1 Rudolph // username2 Mr. Grinch

// After .value and .assign
Object.values(obj).forEach(value => {
    console.log(value);
}) // Santa // Rudolph // Mr. Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
}) // ['username0', 'Santa'] // ['username1', 'Rudolph'] // ['username2', 'Mr. Grinch']

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
}) // ['Santa0', 'Rudolph1', 'Mr. Grinch2']