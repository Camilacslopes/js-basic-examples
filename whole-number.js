// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function isWhole(a) {
  return a - Math.floor(a) === 0
}

console.log(isWhole(4)) //true
console.log(isWhole(1.123)) //false
console.log(isWhole(1048)) //true
console.log(isWhole(10.48)) //false

  