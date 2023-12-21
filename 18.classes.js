//js and Classes

//oop - programing style
//Object - collection of properties and methods
//toLowerCase

// ##why use OOP
//Object literal{}
//Constructor function,Prototypes,Classes,Instances(new,this)

//4pillars - Abstraction - fetch , Encapsulation , Inheritance ,Polymorphism

//this - currentContext
// const user = {
//   username: "Abhi",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log(this.username);
//     // console.log(this);
//   },
// };
// console.log(this);//global context =>{}
// console.log(user.getUserDetails());

// const promiseOne = new Promise();
// //new keyword to construct new instances(empty object)

// function User(username, loginCount) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.greeting = () => {
//     console.log(`Welcome ${this.username}`);
//   };
// }

// const userOne = new User("Abhi", 10);

// const userTwo = new User("Raji", 20);
// console.log("userOne", userOne);
// // console.log("userTwo", userTwo);

//*****************PROTOTYPE(Prototype Inheritance)

//Array->Object->null
//String->object->null
//function->object->null

// function multiplyBy5(num) {
//   return num * 5;
// }

// multiplyBy5.power = 2;
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype); //{}

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
// };

// const chai = new createUser("char", 25);

// const tea = new createUser("char", 250);

// createUser.prototype.printMe = function () {
//   console.log(`score is ${this.score}`);
// };

// chai.printMe();

// let myName = "Abhi";

// console.log(myName.length);

// let myHeros = ["thor", "spiderman"];
// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",
//   getSpiderPower: function () {
//     console.log(`Spidy power is
//     ${this.spiderman}`);
//   },
// };

// Object.prototype.abhi = function () {
//   console.log(`abhi is present in all objects`);
// };

// heroPower.abhi();
// myHeros.abhi();

// Array.prototype.heyAbhi = function () {
//   console.log(`Abhi says hello`);
// };

// heroPower.heyAbhi(); no it can't access

//****************Inheritance */

// const User = {
//   name: "chai",
//   email: "chai@gmail.com",
// };

// const Teacher = {
//   makeVideo: true,
// };

// const TeachingSupport = {
//   isAvailable: false,
// };

// const TASupport = {
//   makeAssignment: "Js",
//   fullTime: true,
// };

//modern approach
// Object.setPrototypeOf(TeachingSupport, Teacher);

// let anotherUsername = "Abhi     ";
// String.prototype.trueLength = function () {
//   console.log(`True length is ${this.trim().length}`);
// };

// anotherUsername.trueLength();
// "Abhis".trueLength();
// "rajulization".trueLength();

//****************************ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("Chai", "Chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// const chai = new User("Chai", "Chai@gmail.com", "123");
// console.log(chai.encryptPassword());

//*********************************PROTOTYPE INHERITANCE

// class User {
//   constructor(username) {
//     this.username = username;
//   }
//   logMe() {
//     console.log(`USERNAME is ${this.username}`);
//   }
// }

// class Teacher extends User {
//   constructor(username, email) {
//     super(username);
//     this.email = username;
//   }
//   addCourse() {
//     console.log(`new Course added by ${this.username}`);
//   }
// }

// const teacher = new Teacher("Abhi", "Abhi@gmail.com");
// const teacherTwo = new User("Raj");
// // console.log(teacher.addCourse());
// console.log(teacher.logMe());
// // console.log(teacherTwo.addCourse());

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
  static createId() {
    //if you don't want to give access to this method use static keyword
    return `${123}`;
  }
}

const abhi = new User("Raj");
console.log(abhi.createId());
