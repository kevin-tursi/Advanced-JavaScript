// PART ONE VIDEO NOTES

// BigInt (used when want to use a number larger than MAX_SAFE_INTEGER)

typeof 2143251345314534; // number
typeof 2143251345314534n; // bigint

Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MAX_SAFE_INTEGER + 1; // 9007199254740992
Number.MAX_SAFE_INTEGER + 10; // 9007199254741000 => this is broken now as JavaScript cant do math over MAX_SAFE_INTEGER
9007199254741000 - 1; // 9007199254741000 => as you can see this does not work anymore
9007199254741000n - 1n // 9007199254740999n => now with adding n it works and uses bigint as a new type for massive numbers
1n + 2n // 3n 





// Optional Chaining Operator ?. (to check if a value is truthy or falsy)

let willPokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andreiPokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

let weight = willPokemon.pikachu.weight
console.log('weight: ', weight); // weight: 6

if (andreiPokemon.pikachu && andreiPokemon.pikachu.weight) {
    let weight2 = andreiPokemon.pikachu.weight;
    console.log(weight2); // undefined
} else {
    let weight2 = undefined;
    console.log(weight2); // undefined
}

let weight3 = andreiPokemon?.pikachu?.weight
console.log(weight3); // undefined (can do this optional chaining instead of if-else)






// Nullish Coalescining Operator ?? (to check if value is null or undefined)

let willPokemon2 = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andreiPokemon2 = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

let power = andreiPokemon2?.pikachu?.power || 'no power'
let power2 = andreiPokemon2?.pikachu?.power ?? 'no power'

console.log(power); // 'no power'
console.log(power2); // 0