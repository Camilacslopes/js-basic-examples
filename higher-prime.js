// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function nextHigher(a) {
  for(let i = 2; i < a ; i++) {
    if(a % i === 0) {
      return nextHigher(a + 1)
    }
  }
 return a
}

console.log(nextHigher(38)) //41
console.log(nextHigher(7)) //7
console.log(nextHigher(115)) //127
console.log(nextHigher(2000)) //2003