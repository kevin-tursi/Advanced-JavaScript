// TYPE COERCION

1 == '1'; // true
1 === '1'; // false

if (1) {
    console.log(5);
} // 5; because javascript coerces 1 to equal true as a boolean

if (0) {
    console.log(5);
} // undefined; because javascript coerces 0 to equal false




//OBJECT.IS()

-0 === +0; // true

Object.is(-0, +0) // false