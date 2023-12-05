//NUMBER

// let score = "55sd";
// let score = null;
// let score = undefined;
// let score = false;
// let score = "Raj";
// const valueInNum = Number(score);
// console.log(typeof valueInNum);
// console.log(valueInNum); //"55sd"=>NaN
// console.log(valueInNum); //null-->0
// console.log(valueInNum); //undefined-->NaN
// console.log(valueInNum); //boolean-->1/0
// console.log(valueInNum); //string-->NaN

// BOOLEAN;

// let someVal = Boolean("Abc");
// console.log(typeof someVal);
// // console.log(someVal); // '' =>false
// console.log(someVal); // 'abc' =>true

//STRING
// const num = 4;
// const myStr = String(num);
// console.log(typeof myStr);
// console.log(myStr);

// *******************OPERATIONS****************

// const value = 5;
// const negval = -value;
// console.log(negval);

// const str1 = "hello";
// const str2 = " Abhi";
// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

//NOTES:if string is first > string+number = string || first number is added then string concat

// console.log(+true);
// console.log(true+); wrong
// console.log(+""); //0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

// let gameCounter = 100;
// // ++gameCounter;
// gameCounter++;
// console.log(gameCounter);

//Logical Operators
//1.Logical AND (&&) ->both condition need to be true
//2.Logical OR (||)  ->one among two is true
//3.Logical NOT (!)  ->reverses the condition

//Enter a number and check if it is multiple of 5
const num = prompt("Enter a number");
const result = num % 5 == 0 ? "multiple" : "not multiple";
console.log("result", result);
