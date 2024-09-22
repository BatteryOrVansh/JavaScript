const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // this pushes dc_heros array as a whole element

// console.log(marvel_heros); // nested array is created
// console.log(marvel_heros[3][1]); // way to access elements of a nested array

// const allHeros = marvel_heros.concat(dc_heros) // concat() returns a new array so value is taken in new variable
// it doesn't results in nested array 
// console.log(allHeros); // all elements are concatenated

// SPREAD METHOD to concatenate arrays (also returns a new array so new var is created)
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// .flat() Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // depth can be defined but Infinity flats all the sub-arrays
console.log(real_another_array);



console.log(Array.isArray("Vansh")) // checks if it is array or not
console.log(Array.from("Vansh")) // converts the string in array 
console.log(Array.from({name: "vansh"})) // interesting (hard to create array from objects unless key or val pair is defined)
// the Array prefix in Array.isArray() and Array.from() is array constructor which is built-in object in JS

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates array from set of var


//GPT: 

// Array() - Can create arrays from elements or a specified length.
// - If one number is passed, it creates an array with that length (empty slots).
const arr1 = Array(5); // Creates [ <5 empty slots> ]

// Array.from() - Converts array-like or iterable objects into real arrays.
// - Useful for converting strings, NodeLists, or sets into arrays.
// - Can apply a mapping function as a second argument.
const arr2 = Array.from('hello'); // Converts string 'hello' to ['h', 'e', 'l', 'l', 'o']

// Array.of() - Creates a new array with the given arguments as elements.
// - Does not confuse single numbers as lengths.
const arr3 = Array.of(5); // Creates [5], not an array of 5 empty slots
