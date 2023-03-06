// FLAT() METHOD FOR ARRAYS

const array = [1, 2, 3, 4, 5]
array.flat(); // [1,2,3,4,5]

const array2 = [1, [2, 3], [4, 5]];
array2.flat(); // [1,2,3,4,5]

const array3 = [1, 2, [3, 4, [5]]];
array3.flat(); // [1, 2, 3, 4, [5]]
array3.flat(2); // [1,2,3,4,5]

const entries = ['bob', 'sally', , , , , , , , 'cindy']
entries.flat(); // ['bob', 'sally', 'cindy']




// FLATMAP() ALLOWS YOU TO USE FLAT METHOD AND MAP METHOD FOR ARRAY

const jurassicPark = [['scorpion', 'fly'], 'bacteria', 'turtle', ['snake', 'lizard'], [[[['t-rex']]], 'dinosaur'], ['squid', 'octopus']];
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + ', t-rex');
console.log(jurassicParkChaos) // // ['scorpion,fly, t-rex', 'bacteria, t-rex', 'turtle, t-rex', 'snake,lizard, t-rex', 't-rex,dinosaur, t-rex', 'squid,octopus, t-rex']





// TRIMSTART() AND TRIMEND()
const userEmail = '       eddytheeagle@gmail.com'
const userEmail2 = 'johnnydangerous@gmail.com          '
console.log(userEmail.trimStart()); //eddytheeagle@gmail.com
console.log(userEmail2.trimEnd()); // johnnydangerous@gmail.com





// FROM ENTRIES - TRANSFORMS A LIST OF KEY VALUE PAIRS TO AN OBJECT

const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
Object.fromEntries(userProfiles); // {commanderTom: 23, derekZlander: 40, hansel: 18}





// UPDATE TO TRY-CATCH BLOCK FEATURE

try {
    bob + 'hi'
} catch {
    console.log('you messed up')
} // 'you messed up' 