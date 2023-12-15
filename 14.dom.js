//innerText - visible on the screen
//textContent - full text
//innerHTML - full HTML
//NodeList is not same as js array
//querySelector = select first occurence
//querySelectorAll() - select all and depends on what data it is returning

// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children); //returns HTMLCollection

// for (const par of parent.children) {
//   par.style.color = "Red";
//   console.log(par.innerHTML);
// }
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// const dayOne = document.querySelector(".day");
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);
// console.log("NODES:", parent.childNodes);

//**********************How to createElement

// const newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "main";
// newDiv.id = "mainId";
// newDiv.setAttribute("title", "mytitle");
// // newDiv.innerText = "My new web";
// const addText = document.createTextNode("My new web");
// newDiv.appendChild(addText);
// document.body.appendChild(newDiv);

//*****************Edit Elements */

const addlanguage = (langName) => {
  const ul = document.querySelector(".language");
  const newLi = document.createElement("li");
  newLi.innerText = langName;
  ul.appendChild(newLi);
};

const addOptlanguage = (langName) => {
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(newLi);
};

addlanguage("Python");
addOptlanguage("Ruby");

//Editing html
// const secondLang = document.querySelector("li:nth-child(2)");
// const newLi = document.createElement("li");
// newLi.textContent = "Raj";
// secondLang.replaceWith(newLi);

const firstlang = document.querySelector("li:first-child");
firstlang.outerHTML = "<li>Typescript</>";
// const newLi = document.createElement("li");
// newLi.textContent = "Typescript";
// firstlang.replaceWith(newLi);

//remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
