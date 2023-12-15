//let,var,const
// Scope = {}
// let a = 10;
// const b = 20;
// var c = 30;

var c = 300; //global scope

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); //not defined
// console.log(b); //not defined
// console.log(c);

// function one() {
//   const username = "Abhi";
//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   //   console.log(website);
//   two();
// }
// one();

if (true) {
  const username = "Abhi";
  if (username === "Abhi") {
    const website = "youTube";
    // console.log(username + website);
  }
  //   console.log(website);
}

console.log(addone(6));
function addone(value) {
  return value + 1;
}
addone(6);

addTwo(6); //Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 1;
};
