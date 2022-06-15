// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function mathOperations(a, b, c, d, e, f){
  return (((a + b - c) * d) / e) ** f;
}


console.log(mathOperations(6,5,4,3,2,1)) //10.5

console.log(mathOperations(6,2,1,4,2,3)) //2744

console.log(mathOperations(2,3,6,4,2,3)) //-8