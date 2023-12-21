//***********************Call******************** */

// function setUsername(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   setUsername.call(this, username);
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser("chai", "chai@gmail.com", "123");
// console.log(chai);

//*********************************Bind */

class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:300";
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("Button Clicked");
    console.log(this);
  }
}

const app = new React();
