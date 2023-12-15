//For loop - do repeation of task

// for (let i = 1; i <= 5; i++) {
//   console.log("Abhi"); //5 execute
// }
// console.log("Loop Ended");

//calculate sum of 1 to n
// let sum = 0;
// for (let num = 1; num <= 5; num++) {
//   sum = sum + num;
// }
// console.log("sum", sum);

//WHILE LOOP
// let i = 1;
// while (i <= 5) {
//   console.log("abc");
//   i++;
// }

//FOR OF

// const strVar = [3, 7, 8, 6];
// for (let val of strVar) {
//   if (val % 2 === 0) {
//     console.log(val);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`inner loop ${j} and inner loop ${i}`);
//   }
// }

//****************************BREAK CONTINUE

// for (let i = 0; i <= 20; i++) {
//   if (i === 5) {
//     console.log("5 is there");
//     // break;
//     continue;
//   }
//   console.log(`Value of i ${i}`);
// }

//*******************for of loop - used for array,strings*/
// const arr = [1, 3, 5, 7, 9];
// for (const item of arr) {
//   console.log(item);
// }

// const greetings = "Hello World";
// for (const str of greetings) {
//   console.log(str);
// }

//Maps - for unique value

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ": ", value);
// }

// const myObject = {
//   game1: "NFS",
//   game2: "MARIO",
// };

// for (const myobj of myObject) {
//   console.log(myobj);
// }

const myObject = {
  js: "javascript",
  cpp: "c++",
  py: "python",
};

//******************for in loop - objects

// for (const key in myObject) {
//   console.log(`${key} is for ${myObject[key]}`);
// }

// const program = ["js", "python", "java"];
// for (const pro in program) {
//   console.log(program[pro]);
// }

//****************************HIGHER ORDER FUNCTIONS************** */

//**********************************forEach loop
//it returns no value

// const coding = ["js", "python", "java"];
// console.log("coding", coding);
// const result = coding.forEach((cod) => console.log(cod.toUpperCase()));
// const result = coding.forEach((cod, index, arr) =>
//   console.log(cod, index, arr)
// );

// const myCoding = [
//   {
//     lanName: "Javascript",
//     lanFileName: "js",
//   },
//   {
//     lanName: "Java",
//     lanFileName: "java",
//   },
//   {
//     lanName: "Python",
//     lanFileName: "py",
//   },
// ];

// const result = myCoding.forEach((cod) => console.log(cod.lanName));
// console.log(result);

//***************************************filter - to filter the values on the condition basis and it returns an array

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = myNums.filter((item) => item % 2 === 0);
// console.log(result);

// const resultTwo = myNums.map((item) => item % 2 === 0);
// console.log(resultTwo);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

//Books having genre History
// const userBooks = books.filter((book) => {
//   return book.genre === "History";
// });

//books published after year 2000
// const userBooks = books.filter((book) => {
//   return book.publish > 2000;
// });

//books published after year 1995 and category is history

// const userBooks = books.filter((book) => {
//   return book.publish >= 1995 && book.genre === "History";
// });

// console.log("userBooks", userBooks);

//****************** map - creates a new Array**************************** */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//to add 10 to each numbers

// const result = myNums.map((num) => {
//   return num + 10;
// });

//chaining
// const result = myNums
//   .map((num) => {
//     return num * 10;
//   })
//   .map((num) => {
//     return num + 1;
//   })
//   .filter((num) => {
//     return num >= 40;
//   });
// console.log("result", result);

//******************reduce */

const array = [1, 2, 3, 4];

// const result = array.reduce((prev, current) => {
//   return prev + current;
// }, 5);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

//print the total price
const result = shoppingCart.reduce((prev, curr) => {
  return prev + curr.price;
}, 0);
console.log("result", result);
