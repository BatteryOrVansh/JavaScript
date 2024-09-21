// Dates

// Unix Epoch :  January 1, 1970 

let myDate = new Date() //date object
console.log(myDate) // not much readable
console.log(myDate.toString()); // converted to string and is readable
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleString());
// these all are diff ways to print date
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // date format is (year, month(0-11), day, hours, minutes, seconds, milliseconds)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) 
// let myCreatedDate = new Date("2023-01-14")   // yyyymmdd
// let myCreatedDate = new Date("01-14-2023")  // ddmmyyyy
 console.log(myCreatedDate.toLocaleString());

 // time stamps 

let myTimeStamp = Date.now() 
console.log(myTimeStamp);   // time in ms passed since 1 jan 1970
// console.log(myCreatedDate.getTime()); 
// console.log(Math.floor(Date.now()/1000)); // to get value in seconds

/*
Difference between Date.now() and getTime():

Date.now(): 
- A static method that returns the current timestamp in milliseconds since the Unix epoch (January 1, 1970).
- No need to create a Date object, making it faster and more concise.

getTime(): 
- An instance method that returns the timestamp of a specific Date object.
- Requires creating a Date object before calling getTime().

*/




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // .getMonth() starts from 0 : jan : 0, feb : 1, etc
// therefore 1 is added to not confuse the end user

console.log(newDate.getDay()); // returns num.. sun : 0, mon: 1, tue : 2, etc

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})) // gives saturday....... it has many formatting styles that can be used with the parameters

// .toLocaleString() is an instance method, not static.
// - Used with Date objects to format date and time based on locale.
// - Used with Number objects to format numbers based on locale (e.g., currency, decimal formatting).