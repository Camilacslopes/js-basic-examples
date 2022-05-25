// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function removeLetters(a) {
    return a.slice(0, -3);
}

console.log(removeLetters("abcdefg")) //abcd
console.log(removeLetters("1234567")) //1234
