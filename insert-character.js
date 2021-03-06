// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function insertCharacter(a, b) {
  return a.replace(/(?=(...)+$)/g, b);
}

console.log(insertCharacter('1234567','.')) //'1.234.567'
console.log(insertCharacter('abcde','$')) //'ab$cde'