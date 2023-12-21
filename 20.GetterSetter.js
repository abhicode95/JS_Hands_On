// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   get password() {
//     //to get value
//     return this._password.toUpperCase();
//   }
//   set password(value) {
//     //to set value
//     this._password = value;
//   }
//   get email() {
//     return this._email.toUpperCase();
//   }
//   set email(value) {
//     //to set value
//     this._email = value;
//   }
// }
// const abhi = new User("Abhi@gmail.com", "abc");
// console.log(abhi.password);
// console.log(abhi.email);

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },

    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("Chai@gmail.com", "chai");
console.log(chai);
