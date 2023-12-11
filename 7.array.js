//array - collection of items(sametype of data) ,mutable

//array creation

const myArr = [0, 1, 9, 4, 3, 8];
// const myHeros = ["shaktimaan", "arymaan"];

// const newArr = new Array(1, 3, 4);

// const marks = [66, 45, 89, 33];
// console.log(marks.length);
// console.log(typeof marks);

//array indices
// console.log(marks[2]);

//looping over an array
// for (let arr of marks) {
//   console.log(arr);
// }

// const studentmarks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let mar of studentmarks) {
//   sum = sum + mar;
// }
// console.log("avg", sum / studentmarks.length);

// const itemPrice = [250, 645, 300, 900, 50];
// let newPrice = [];
// for (let price of itemPrice) {
//   const finalPrice = price - price * 0.1;
//   newPrice.push(finalPrice);
// }
// console.log("finalPrice", newPrice);

//Arrays method

// let fooditems = ["potato", "apple", "litchi"];
// console.log(fooditems);

//1.push - add items at the end and it changes the original array

// myArr.push(5);
// console.log(myArr);
// fooditems.push("choclate", "mango");
// console.log(fooditems);

//2.pop - remove the items from end and it changes the original array
// fooditems.pop();
// console.log(fooditems);
// myArr.pop();

//3.unshift - Inserts new elements at the start of an array, and returns the new length of the array.
// myArr.unshift(9);
//4.shift - - Removes the first element from an array and returns it.
// myArr.shift();

//4.includes - Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(myArr.includes(6));

//5.indexOf - Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// console.log(myArr.indexOf(9));

//6.join - Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr.join());

//7.slice - Returns a copy of a section of an array
//but end is not included and it does not chnage original arrays
// console.log("A", myArr);
// const myn1 = myArr.slice(1, 4);
// console.log(myn1);

// console.log("B", myArr);

//8.splice -Removes elements from an array and, if necessary, inserts new elements in their place,
//returning the deleted elements and manipulates the original array

// const myn2 = myArr.splice(1, 4);
// console.log("C", myArr);
// console.log(myn2);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//spread operator
// const finalHeros = [...marvel_heros, ...dc_heros];
// console.log(finalHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//flat = Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const new_array = another_array.flat(Infinity);
// console.log(new_array);

//isArray -
console.log(Array.isArray("Abhi"));
console.log(Array.from("Abhi")); // convert into array
console.log(Array.from({ name: "Abhi" }));
