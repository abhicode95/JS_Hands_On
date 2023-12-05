"use strict"; //treat all JS code as newer version
// alert("Hello"); // we are using nodeJs not browser

//DATA TYPES

let name = "abhi";
let age = 26;
let isloggedIn = false;
const temp = null;
let userEmail;

// const id = Symbol("123");
// console.log(id);

//Primitive - String,Number,Boolean(true/false),bigint,null(standalone value),undefined,Symbol(figma tools-unique)

//Non-primitive(Refrence Type) - Object,Array,Functions -return type object

const num = [1, 3, 5];
const myObj = {
  name: "Abhi",
};

function myFunc() {
  console.log("hello");
}

//typeof tells what is the type of our data
// console.log(typeof null); //object

//JS is dynamically typed language

//************************Memory Management************** */

//Stack(Primitive) - all values gets a copy so original value does not change
//Heap(Non-primitive) - it gives the reference for the values so changing one will reflect in others

// let myVal = "Abhi";
// let newVal = myVal;
// newVal = "Raj";
// console.log(myVal);
// console.log(newVal);

let userOne = {
  name: "Abhi",
  job: "Software",
};

let userTwo = userOne;
userTwo.name = "Mohan";
console.log(userOne);
console.log(userTwo);
// const userTwo = {
//   name: "Raj",
//   job: "Hardware",
// };

const product = {
  name: "Parker Pen",
  rating: 4,
  price: 270,
  offer: 10,
};

const profile = {
  name: "Abhi",
  isFollowing: true,
  followers: 100,
  posts: 45,
};
