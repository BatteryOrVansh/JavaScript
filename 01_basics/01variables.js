const accountId = 144553 // this is constant and can't be changed
let accountEmail = "officialvanshdixit@gmail.com"
var accountPass = "12345"
accountCity = "Lucknow"
let accountState;
/*
accountId = 2 // trying to change but it can't be changed
console.log(accountId);
*/

accountEmail = "vanshdixit2005@gmail.com"
accountPass = "2355ak"
accountCity = "Tokyo"

// better to display all of these in table instead of writing console.log() for every variable
console.table([accountId, accountEmail, accountPass, accountCity]); // indices are in numeral format
console.table([accountId, accountEmail, accountPass, accountCity, accountState]); // accountState is undefined
console.table({accountId: accountId, accountEmail: accountEmail}); // indices are variables and values are values of the respective variable

/* there are two ways to declare variables using "let" and also "var"
but prefer not to use var
because of isssues  in block scope and functional scope
*/