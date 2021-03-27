
function hello(callback, lastname){
    console.log('hello ' + callback(lastname));
}

function getName() {
    return 'Code Mafia';
}
const getFirstName = function(name) {
    return 'Code' + name;
}

hello(getFirstName, 'Mafia');
hello(function(name) {
    return 'Code' + name;
},'Mafia');
hello(() => 'Code');

function doSomething(a, b, callback) {
    const result = callback(a,b);
    console.log(result);
}

function multiply(a, b) {
    return a*b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 2, multiply);
doSomething(3, 3, plus);