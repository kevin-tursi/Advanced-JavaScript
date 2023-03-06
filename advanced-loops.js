// TWO OTHER WAYS TO LOOP IN JAVASCRIPT (NOT FOR, DO, WHILE, FOREACH)

const basket = ['apples', 'oranges', 'grapes'];

// FOR 
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// FOR EACH 

basket.forEach(item => console.log(item));


// WHILE LOOP

let i = 0;
while (i < basket.length) {
    console.log(basket[i]);
    i++;
}

// DO-WHILE LOOP

let i1 = 0;
do {
    console.log(basket[i1]);
    i1++;
} while (i1 < basket.length);





// NEW WAYS TO LOOP (FOR OF AND FOR IN)

// FOR OF LOOP

for (item of basket) {
    console.log(item);
}

// ITERATING ARRAYS OR STRING

for (letter of 'basket') {
    console.log(letter);
} // b // a // s // k // e // t


// FOR IN (FOR OBJECTS) - ALLOWS US TO LOOP OVER AND SEE OBJECT PROPERTIES

// INUMERATING - ALLOWS US TO SEE PROPERTIES IN OBJECTS
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in detailedBasket) {
    console.log(item);
} // apples // oranges // grapes
