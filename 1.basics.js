//variables

const accountId = 23; //unchanged value
let accountEmail = "Abhi@gmail.com"; //prefred way
var accountPassword = "1234"; //don't use
accountCity = "Patna"; //never use
let accountState; //if we don't assign a value to a variable and just declare it it will be undefined
console.log(accountState);

// accountId = 2; //TypeError: Assignment to constant variable.
// console.log(accountId);

accountEmail = "raj@gmail.com";
accountPassword = "7890";
accountCity = "Bhopal";

// console.table([accountId, accountEmail, accountPassword, accountCity]);

//NOTE:prefer not to use var as it creates issue in block scope and functional scope

//let : variable cannot be re-declared but can be updated.A block scope variable.
//const : variable cannot be re-declared or updated.A block scope variable.
//var : variable can be re-declared and updated.A global scope variable.
//block:{}
