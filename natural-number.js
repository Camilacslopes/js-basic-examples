// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function hgherNaturalNumber(x, y) {
  while (x % y !== 0) x++;
  return x;
}

console.log(hgherNaturalNumber(1, 23)) //23
console.log(hgherNaturalNumber(23, 23)) //23 
console.log(hgherNaturalNumber(7, 3)) //9
console.log(hgherNaturalNumber(-5, 7)) //0
