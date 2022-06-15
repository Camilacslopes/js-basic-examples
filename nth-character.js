// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function getCharacter(a, n){
  return a[n - 1];
}

console.log(getCharacter("abcd",3)) //c
console.log(getCharacter("JavaScript", 8)) //i