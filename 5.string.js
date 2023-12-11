// const name = "abhi";
// const repoCount = 50;
// console.log(name + repoCount); //not a good practise

//String Declaration

const newString = new String("abhi shek");
// console.log(newString);

//Template literal
// console.log(`My name is ${name}`);

// console.log(newString.toUpperCase());
// console.log(newString.includes("a"));
// console.log(newString.valueOf);
// console.log(newString.split(" "));
// console.log(newString.charAt(3));
// console.log(newString.indexOf("h"));
// console.log(newString.slice(3, 7)); //(here we can use -ve value)
// console.log(newString.substring(3, 7)); //(here we can not use -ve value)
// console.log(newString.trim());
console.log(newString.replace("abhi", "kumar"));

//replace the string into array
// const result = newString.split(" ");
// console.log(result);

//Notes: String methods does not modify the original value but creates a new value
//(Immutable)

//To make username
const username = "abhishekkumar";
console.log(`@${username}${username.length}`);
