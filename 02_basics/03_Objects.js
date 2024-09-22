// singleton
// Object.create

// Objects can be created using the object literal or the object constructor
// object literals (Object Initialiser) ---> An object literal (or initializer) is a way to define an object using a set of key-value pairs inside curly braces {}. 


const mySym = Symbol("key1") 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // (the keys are strings by default)
    [mySym]: "mykey1", // to use symbol inside an object, we have to put it under square brackets otherwise it behaves like a string .. it can also be seen in the output 
    isLoggedIn: false,
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // to access the value of a key from the object
// console.log(JsUser["email"]) // better way to access the values.
// console.log(JsUser["full name"]) // this is why it is better because we can't write (JsUser."full name")
// console.log(JsUser[mySym]) // to access the symbol   

JsUser.email = "hitesh@chatgpt.com" // mutating the value of key in the object

// Object.freeze(JsUser) // this freezes the object from any modification
JsUser.email = "hitesh@microsoft.com" // this change will not take place 
// console.log(JsUser);

// functions can be treated as variables

JsUser.greeting = function(){
    console.log("Hello JS user");
}
//console.log(JsUser) // this is added in the object output ---> greeting: [Function (anonymous)],
// console.log(JsUser.greeting) // prints [Function (anonymous)] (here function is not executed but we get its reference)
// console.log(JsUser.greeting());  // prints Hello Js user and also Undefined below (undefined is explained later)

// trying to get the reference of name from the original object     
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // we r referencing inside the same object so we use 'this'
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());