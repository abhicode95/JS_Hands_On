//If Statement
// if (condition) {
//   //execute code
// }

// const temp = 70;

// if (temp < 50) {
//   console.log("Less");
// } else {
//   console.log("greater");
// }

//*******************comparison operator : <,>,<=,>=,==,===(type and value),!==

// const balance = 1000;
// // if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;
// if (userLoggedIn && debitCard) {
//   console.log("Allow courses");
// }

//****************************SWITCH CASE********************
// switch (condition) {
//   case value:
//     break;
//   default:
//     break;
// }

//*********************FALSY VALUES*************
"", undefined, null, false, 0, -0, "BigInt 0n", NaN;
//*********************TRUTHY VALUES*************
"0", "false", " ", [], {}, function () {};

const user = [];

const emptyObj = {};

//array empty check
// if (user.length === 0) {
//   console.log("Empty");
// }

//object empty check
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Empty object");
// }
//false==0 >true,false=='' >true,0==''>true

//*************************Nullish coalescing operator(??):null,undefined

// let val1;
// // val1 = 5 ?? 8;
// val1 = undefined ?? 18;
// console.log(val1);

//********************************Terniary OPerator
// condition ? true : false;
// const iceTea = 100;
// iceTea <= 80 ? console.log("Less") : console.log("More");
