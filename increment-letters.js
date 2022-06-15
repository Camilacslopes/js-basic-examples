// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function nextLetter(str) {
  return str.split("").map((char) => String.fromCharCode(char.charCodeAt() + 1)).join("");
}

console.log(nextLetter('bnchmf')) //'coding'
console.log(nextLetter('sdrshmf')) //'testing'