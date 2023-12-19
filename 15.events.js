//type,timestamp,defaultPrevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altKey,ctrlKey,shiftkey,keyCode
// const owl = document.getElementById("owl");
// owl.addEventListener("click", (e) => {
//   console.log("Clicked", e);
// });

//Event propagation(Bubbling,capturing)
// document.getElementById("images").addEventListener("click", () => {
//   console.log("Clicked Inside ul");
// });

// document.getElementById("owl").addEventListener("click", (e) => {
//   console.log("Clicked owl");
//   e.stopPropagation(); //event won't go to top after bubbling
// });

//Event bubbling from inside to outside html element
//Event capturing from top to bottom html element

// document.getElementById("goggle").addEventListener("click", (e) => {
//   console.log("goggle clicked");
//   e.preventDefault();
// });

document.getElementById("images").addEventListener("click", (e) => {
  console.log("event", e.target.parentNode);

  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
