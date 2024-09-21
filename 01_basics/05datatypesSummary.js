//  Primitive : Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. JavaScript supports the following primitive data types:

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


/*
Some extra info : 

Undefined:
This means that a variable has been declared but has not been assigned a value, or it has been explicitly set to the value `undefined`.

Symbol data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.
*/


// js is dynamically typed since datatype is not defined for variables ... Examples: 
const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// how to define symbols
const id = Symbol('123')
const anotherId = Symbol('123') // even if we pass same value as strings or numbers or anyth, the value of variable will be unique
console.log(id)
console.log(anotherId)
console.log(id === anotherId);  // gives false (verifying through ===); (they both are not same cz the return type in both is different)



//const bigNumber = 3456543576654356754n      //(adding 'n' at last represents that it is a bigint)



// Reference (Non primitive) : Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. 

// Array, Objects, Functions are Non Primitive

 // arrays
const heros = ["shaktiman", "naagraj", "doga"];  

//objects -------- stored inside curly braces and are assigned to a variable... datatype can be anything
let myObj = {
    name: "hitesh",
    age: 22,
}

// functions -------- can also be stored inside a variable 
const myFunction = function(){
    console.log("Hello world");
}

// checking datatypes
console.log(typeof heros);  // object (the datatype of all non primitive is 'object')
console.log(typeof myFunction); // returns 'function' but is called an 'object function'
console.log(typeof anotherId);
console.log(typeof bigNumber); // returns bigint (but when commented out, it returns 'undefined')


// https://262.ecma-international.org/5.1/#sec-11.4.3