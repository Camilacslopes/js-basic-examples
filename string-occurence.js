// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function stringOccurence(a, b) {
    return b.split(a).length - 1
}

console.log(stringOccurence('m', 'how many times does the character occur in this sentence?')) //2
console.log(stringOccurence('h', 'how many times does the character occur in this sentence?')) //4
console.log(stringOccurence('?', 'how many times does the character occur in this sentence?')) //1 
console.log(stringOccurence('z', 'how many times does the character occur in this sentence?')) //0