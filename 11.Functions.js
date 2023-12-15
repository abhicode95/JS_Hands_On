//declaration
function sayMyName() {
  console.log("first");
}
//sayMyName - reference
// sayMyName(); //call

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNumbers(9, 6);
// console.log(result);

// function addTwoNumbers(num1, num2) {
//   //parameters
//   return num1 + num2; //after return ntg will execute
// }
// const result = addTwoNumbers(9, 6); //arguments
// console.log(result);

// function loginUserMessage(username) {
//   //   if (username === undefined) {
//   //     console.log("Please enter username");
//   //     return;
//   //   }
//   if (!username) {
//     console.log("Please enter username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// // const result = loginUserMessage("Raj");
// const result = loginUserMessage(); //undefined if nothing is passsed
// console.log(result);

// function calculateCartPrice(...num1) {
//   return num1;
// }

// const result = calculateCartPrice(600, 500, 100);
// console.log(result);

// const user = {
//   username: "Abhi",
//   price: 199,
// };

// function handleObject(anyobject) {
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.price}`
//   );
// }
// handleObject(user);

// const myNewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray) {
//   return getArray[2];
// }

// console.log(returnSecondValue(myNewArray));

//********************************ARROW FUNCTIONS******************
//to refer current context we use this keyword
// const user = {
//   username: "Abhi",
//   price: 199,
//   welcomeMessage: function () {
//     console.log(`${this.username} welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "Raj";
// user.welcomeMessage();

// console.log(this); //{}
//browser has a global object - window object

// function chai() {
//   const username = "Abhi";
//   console.log(this.username); //undefined
// }
// chai();

// const chai = function () {
//   const username = "Abhi";
//   console.log(this.username); //undefined
// };

// const chai = () => {
//   const username = "Abhi";
//   console.log(this);
// };

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 5));

// Note: {} then return keyword is must
// ()=>no return

// const addTwo = (num1, num2) => return num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;

//*********************IIFE - Immediately Invoked Function Expressions(IIFE)***********

// function chai() {
//   console.log("DB Connected");
// }
// chai();
// Note: "To get rid of global scope pollution,we use IIFE"
// (function chai() {
//   //named IIFE
//   console.log("DB Connected");
// })();

// ((name) => {
//   console.log(`first name ${name}`);
// })("Raj");
