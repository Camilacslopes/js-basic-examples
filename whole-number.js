function isWhole(a) {
  return a - Math.floor(a) === 0
}

console.log(isWhole(4)) //true
console.log(isWhole(1.123)) //false
console.log(isWhole(1048)) //true
console.log(isWhole(10.48)) //false

  