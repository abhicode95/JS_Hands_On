//singleton - when we are creating using
//constructor it will be singleton - Object.create

//object literals - object declaration

//Note: take a symbol and add as a key to object and print
// const mySym = Symbol("key1");
// const symObject = {
//   [mySym]: "myKey1",
// };
// console.log(symObject[mySym]); //access

// const mySym = Symbol("key1");
// const myUser = {
//   name: "Abhi",
//   "full name": "Abhi kumar",
//   age: 26,
//   location: "Bangalore",
//   email: "Abhi@google.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Mon", "Sat"],
//   [mySym]: "myKey1",
// };

//printing(ways of accessing values)
// console.log(myUser.location);
// console.log(myUser["email"]);
// console.log(myUser["full name"]);
// myUser.email = "abhi1234@gmai.com";
// Object.freeze(myUser); //vales won't change after this
// myUser.email = "raj1234@gmai.com";
// myUser.greeting = function () {
//   console.log("My Code");
// };
// myUser.greetingTwo = function () {
//   console.log(`My name ${this.name}`);
// };
// console.log(myUser.greetingTwo());

//Singleton(Constructor way)

// const appUser = new Object(); //singleton
// const appUser = {};
// appUser.id = "123abc";
// appUser.name = "Sam";
// appUser.isLoggedIn = false;
// // console.log(appUser);

// const regulaUser = {
//   email: "abhi@gmail.com",
//   fullname: {
//     userfullname: {
//       firstName: "Mohan",
//       lastname: "Kumar",
//     },
//   },
// };

// console.log(regulaUser.fullname.userfullname.firstName);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// const obj3 = { ...obj1, ...obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

//to get all the keys
// console.log(Object.keys(regulaUser));
// // to get all the values
// console.log(Object.values(regulaUser));
// //to have key values pair
// console.log(Object.entries(regulaUser));

// console.log(regulaUser.hasOwnProperty("email1"));

//destructuring
const course = {
  coursename: "js",
  price: "999",
  courseInstructor: "Abhi",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
