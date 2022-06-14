// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function toDigits(a) {
  return a.toString().split('').map(Number);
}

console.log(toDigits(10)) //[1,0]
console.log(toDigits(931)) //[9,3,1]
console.log(toDigits(193278)) //[1,9,3,2,7,8]
 