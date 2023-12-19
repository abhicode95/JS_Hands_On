//JS is synchronous,single threaded
//execution context - execute one line of code at a time
//Blocking code - Block the flow of program,Sync
//Non Blocking code - Don't block the flow of code,Async

//############################setTimeout, will execute only once after the given time you passed

const namePrint = (str) => {
  console.log(str, Date.now());
};
// const changeText = () => {
//   document.querySelector("h1").innerHTML = "Async Update";
// };
// const changeMe = setTimeout(changeText, 2000);
// document.querySelector("#stop").addEventListener("click", () => {
//   clearTimeout(changeMe);
//   console.log("Stopped");
// });

//###################setInterval()

document.getElementById("stop").addEventListener("click", () => {
  const intervalId = setInterval(namePrint, 1000, "Abhi");
  clearInterval(intervalId);
});

document.getElementById("start").addEventListener("click", () => {
  //   setInterval(namePrint, 1000, "Abhi");
});
