// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'

function rightString(a, b){
  const str = a.concat(b.split("").reverse().join("")).replaceAll("%", "");
  return str[0].toUpperCase() + str.slice(1);
}

console.log(rightString('java', 'tpi%rcs')) //'Javascript'
console.log(rightString('c%ountry', 'edis')) //'Countryside'
console.log(rightString('down', 'nw%ot')) //'Downtown'