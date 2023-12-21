//Closure
// function Outer() {
//   let myName = "Abhi";
//   function InnerOne() {
//     let newName = "Raj";
//     console.log("InnerOne", myName);
//   }
//   function InnerTwo() {
//     console.log("InnerTwo", newName); //no
//   }
//   InnerOne();
//   InnerTwo();
// }
// Outer();

//Lexical Scope
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
