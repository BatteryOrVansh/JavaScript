//------------------------------------------------------------------
// to convert string into number, we use the function Number()

let age = "19" // string
console.log(typeof age) // string
let numAge = Number(age) // conversion operation takes place
console.log(typeof numAge) // number
console.log(numAge) // 19

/* 
we  can convert other datatypes into Numbers using same fxn
s1 = 19ahns  --> Number(s1) --> NaN --> type Number
*/

let s1 = true
let numBool = Number(s1) 
console.log(numBool) // 1
console.log(typeof numBool) // number

//----------------------------------------------------------

// to convert into boolean, we use Boolean()

let isLoggedIn = 1 // number
let booleanIsLoggedIn = Boolean(isLoggedIn) // conversion takes place
console.log(booleanIsLoggedIn) // true
console.log(typeof booleanIsLoggedIn) // boolean

// same way we can convert other datatypes into boolean 

let s2 = "" // empty string
let Bools2 = Boolean(s2) // conversion takes place
console.log(Bools2) // false --? cz string is empty 
// for a non empty string, the values is true

// 1 --> true, 0 --> false

/*
let s3 = null 
let Bools3 = Boolean(s3)
console.log(Bools3) // false

let s4 = undefined 
let Bools4 = Boolean(s4)
console.log(Bools4) // false 
*/

// -------------------------------------------------------------------------


//converting to string

let num = 18
let stringNum = String(num)
console.log(typeof stringNum)
console.log(stringNum)



// ***************************************OPERATIONS**************************************

let v = 3
let negV = -v // negative value (decrements)
console.log(negV) 

// BASIC ARITHMETICS

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hiiii"
let str2 = " good morning"

let str3 = str1 + str2 
console.log(str3)

// console.log("1" + 2); ---> gives 12  (it concatenates)
// console.log(1 + "2"); ---> gives 12
// console.log("1" + 2 + 2); ---> gives 122 cz it then treats both 2s as string cz first element is string
// console.log(1 + 2 + "2"); ---> gives 32 J(adds 1+2 and then treats it as string)

console.log(+true) // ---> gives 1 (increments true(1)... but not advised to write such codes)
console.log(+"") // gives 0

let n1, n2, n3
n1 = n2 = n3 = 2+2

let gameCounter = 100
gameCounter++; // postfix increment operator  
// ++gamecounter; ---> gives same output  = 101
console.log(gameCounter) // 101
// prefix and postfix increment mdn documentation explains more easily
