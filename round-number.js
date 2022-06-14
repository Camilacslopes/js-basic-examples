// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function roundNumber(a) {
    return Number(a.toFixed(2));
}

console.log(roundNumber(2.12397)) //2.12
console.log(roundNumber(3.136)) //3.14
console.log(roundNumber(1.12397)) //1.12
console.log(roundNumber(26.1379)) //26.14
