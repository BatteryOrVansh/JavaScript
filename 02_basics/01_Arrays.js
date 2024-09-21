// array object enables storing a collection of multiple items under a single variable name, 

const myArr = [0, 1, 2, 3, 4, 5] // can contain multiple datatype
console.log(myArr[0]);
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // new Array() constructor
// special case in array constructor
//If you pass a single numeric argument to new Array(), it will create an empty array of that length 
//instead of adding that number as the first element. 
const myArr3 = new Array(5);
console.log(myArr3); // Outputs: [ <5 empty slots> ], creates an array with 5 empty elements




// Array methods

// myArr.push(6) // pushes the element in the existing array

// myArr.push(7)
// myArr.pop() // deletes the last element from the array
// console.log(myArr);

// myArr.unshift(9) // adds the element in the start of the array 
// myArr.shift() // deletes the element from the start of the array 

// console.log(myArr.includes(9)); // checks for a certain element
// console.log(myArr.indexOf(3)); // returns the index. (returns -1 if the element doesn't exist )

// const newArr = myArr.join() // converts all the elements of the array into a string by concatenating them, and it returns that string.

// console.log(myArr); // array
// console.log( newArr);  // strings 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // to extract a portion of an array without modifying the original array

console.log(myn1);
console.log("B ", myArr); // the array remains same


const myn2 = myArr.splice(1, 3) // manipulates the original array by adding/removing elements
// 
console.log("C ", myArr); // the array is modified and the range defined in splice() is extracted out
console.log(myn2); // [1,2,3] .. (the last element of range is also included)  


// NOTE :  array-copy operations create shallow copies.. shallow copy same reference points 