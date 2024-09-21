const score = 400
console.log(score); 

const balance = new Number(100)   // non primitive number object
console.log(balance); // outputs as [Number : 100]

/*
Difference between primitive number and Number object:
- `score` is a primitive number (400), logs directly as 400.
- `balance` is a Number object created with `new Number(100)`, logs as [Number: 100] and is treated as an object.
- `typeof score` is "number", while `typeof balance` is "object". 
- Comparisons: score === balance is false (different types), score == balance is true (type coercion).
*/

console.log(balance.toString().length); // basic conversion to string
console.log(balance.toFixed(1)); // gives in decimal; the parameter defines the decimal places that's reqd


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // returns string and in rounded off format 

const hundreds = 1000000 // When the no. of zeroes r hard to identify
console.log(hundreds.toLocaleString('en-IN')); // adds comma as per Indian numbers standard


// +++++++++++++ Maths +++++++++++++++++++++++++++++
 
console.log(Math);  // object (if printed in console, it gives all the fxns we can use)
console.log(Math.abs(-4)); // absolute value (returns 4)
console.log(Math.round(4.6)); // round off
console.log(Math.ceil(4.2)); // top value
console.log(Math.floor(4.9)); // lowest value
console.log(Math.min(4, 3, 6, 8)); //  tell minimum value out of all given 
console.log(Math.max(4, 3, 6, 8)); // tell max val out of all given

console.log(Math.random()); // gives out a random number between 0 and 1 
console.log((Math.random()*10) + 1); // to get random num bw 0 and 10 


 
// to get values between a custom range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
// Generates a random integer between min and max, inclusive.
// - Math.random() generates a random decimal in [0, 1).
// - (max - min + 1) calculates the range of possible values (includes both min and max).
// - Multiplying by (max - min + 1) scales the random value to [0, (max - min + 1)).
// - Math.floor() rounds down to the nearest whole number, resulting in a range of [0, max - min].
// - Adding min shifts the range to [min, max], ensuring both bounds are inclusive.
