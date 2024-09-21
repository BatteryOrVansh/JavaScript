//BASIC COMPARISONS

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); ---> true (CONVERTS IT TO NUMBER AND THEN RETURNS TRUE)
// console.log("02" > 1);

console.log(null > 0); //false (not converted)
console.log(null == 0); // false (not converted......... == is equality operator) 
console.log(null >= 0); // true (here the null is converted to zero first and then it is compared)
// equality and comparison operators work differently 

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === 
 
console.log("2" === 2); // strict check (it also checks the datatype)
 