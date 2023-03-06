// scope

// Root Scope (window)
var fun = 5;

function funFunction() {
    // child scope
    var fun = 'helloooo';
    console.log(1, fun);
}

function funnerFunction() {
    // child scope
    var fun = 'bye';
    console.log(2, fun);
}

function funnestFunction() {
    // child scope
    fun = 'ahhhhhh'
    console.log(3, fun);
}

console.log('window', fun);