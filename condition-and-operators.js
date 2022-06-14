// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function divideOrMultiply(a, b) {
  return a < b ? a / b : a * b
}

console.log(divideOrMultiply(10, 100)) //0.1
console.log(divideOrMultiply(90, 45)) //4050
console.log(divideOrMultiply(8, 20))  //0.4
console.log(divideOrMultiply(2, 0.5)) //1
