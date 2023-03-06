// ternary operator
// condition ? expression 1 : expression 2;
// is this true or false? if true provide expression 1, if false provide expression 2

// function isUserValid(boolean) {
//     return boolean;
// }

// var answer = isUserValid(true) ? 'you may enter' : 'access denied';

// // var automatedAnswer =
// //     'Your account # is ' + (isUserValid(false) ? '1234' : 'not a valid user');

// function condition() {
//     if (isUserValid(true)) {
//         return 'you may enter';
//     } else {
//         return 'access denied';
//     }
// };

// var answer2 = condition();




// switch statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case 'forward':
            whatHappens = 'you encounter a monster';
            break;
        case 'back':
            whatHappens = 'you arrive home';
            break;
        case 'right':
            whatHappens = 'you found a river';
            break;
        case 'left':
            whatHappens = 'you run into a troll';
            break;
        default:
            whatHappens = 'please enter a valid direction';
    }
    return whatHappens;
}