// PRIMITIVE TYPES

var a = 5;
var b = a;

b++;

console.log(a); // 5
console.log(b); // 6





// OBJECTS

let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); //{ name: 'Yao', password: 'easypeasy' };
console.log(obj2); //{ name: 'Yao', password: 'easypeasy' };

let c1 = [1, 2, 3, 4, 5];
let d1 = c;

d1.push(1232452345234);

console.log(d1); // [1, 2, 3, 4, 5, 1232452345234]
console.log(c1); // [1, 2, 3, 4, 5, 1232452345234]

// TO GET THEM TO NOT BE THE STORED IN THE EXACT SAME VARIABLE BUT MODIFY THE SAME WAY SO CHANGING D WONT CHANGE C

let c2 = [1, 2, 3, 4, 5];
let d2 = [].concat(c);

d2.push(12446234623);

console.log(c2); // [1, 2, 3, 4, 5];
console.log(d2); // [1, 2, 3, 4, 5, 12446234623];


let obj = { a: 'a', b: 'b', c: 'c' };
let clone = Object.assign({}, obj);
let clone2 = { ...obj }; // works the same as 

obj.c = 5;
console.log(clone); // {a: 'a', b: 'b', c: 'c'}
console.log(clone2); // {a: 'a', b: 'b', c: 'c'}



let obj3 = { a: 'a', b: 'b', c: 'c' };

let clone1 = obj;

obj3.c = 5;
console.log(clone1); // {a: 'a', b: 'b', c: 5}




// SHALLOW CLONING = ONLY CLONES FIRST LAYER ... THIS IS WHY OBJECT.C.DEEP IS CHANGEABLE SINCE IT IS THE SECOND LAYER IN

let object = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };

let cloning = Object.assign({}, object);
let cloning2 = { ...object };

object.c.deep = 'hahahahaha';

console.log(object); // { a: 'a', b: 'b', c: { deep: 'hahahahaha' } };
console.log(cloning); // { a: 'a', b: 'b', c: { deep: 'hahahahaha' } };
console.log(cloning2); // { a: 'a', b: 'b', c: { deep: 'hahahahaha' } };






// DEEP CLONING

let object2 = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };

let cloning3 = { ...object2 };
let superClone = JSON.parse(JSON.stringify(object2)); // how to deep clone multiple layers

object2.c.deep = 'hahahahaha';

console.log(object2); // { a: 'a', b: 'b', c: { deep: 'hahahahaha' } };
console.log(cloning3); // { a: 'a', b: 'b', c: { deep: 'hahahahaha' } };
console.log(superClone); // { a: 'a', b: 'b', c: { deep: 'try and copy me' } };