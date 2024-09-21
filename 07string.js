const name = "Vansh"
const repoCount = 10

// console.log(name + repoCount + " Value");     NOT AT ALL RECOMMENDED

// Strings Interpolation.. using `` (backticks) and ${} for inserting variables' values (ALSO CALLED TEMPLATE LITERALS)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// we can use functions in this as well to format the text in the variables..
console.log(`Hi there, I'm ${name.toUpperCase()}`)

const gameName = new String('Vansh-Dixit-05')  // this creates a string object using string constructor..... It's not a primitive string
//You rarely need to create a string object using new String(), because JavaScript automatically provides string methods to primitive strings.

console.log(gameName[0]);       
console.log(gameName.__proto__);         // prints the prototype of the gameName object in the console.
/*
This will output the prototype object for the String object, 
which contains all the methods and properties that gameName inherits 
from the String constructor. 
These include string methods like .toUpperCase(), .toLowerCase(), .slice(), etc.
*/


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// Difference between .substring() and .slice():
// 1. .substring() swaps indices if start > end, while .slice() returns an empty string.
// 2. .substring() treats negative indices as 0, but .slice() allows negative indices, counting from the end.


const newStringOne = "   hitesh    "
console.log(newStringOne);      // the spaces exist in the output
console.log(newStringOne.trim()); // the spaces r trimmed

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))  //.replace is used to replace %20 with -

console.log(url.includes('sundar')) // searches if the specific string is there in the var or not 

console.log(gameName.split('-')); // .split() splits the string nd converts in array ; here seperator is defined as '-'