// Write a function that takes a value as argument
// Return the type of the value
function witchValue(a){
  return typeof(a);
}

console.log(witchValue(2)) //number
console.log(witchValue("js")) //string
console.log(witchValue()) //undefined

