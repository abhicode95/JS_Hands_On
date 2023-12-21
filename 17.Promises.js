// const promiseOne = new Promise((resolve, reject) => {
//   //do an async task,db calls,network
//   setTimeout(() => {
//     console.log("task");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("Promise consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Task Two");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Abhi", age: 27 });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // let error = true;
//     let error = false;
//     if (!error) {
//       resolve({ username: "Abhi", age: 27 });
//     } else {
//       reject("ERROR:Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise is fulfilled and rejected");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     // let error = false;
//     if (!error) {
//       resolve({ username: "Abhi", age: 27 });
//     } else {
//       reject("ERROR:JS went wrong");
//     }
//   }, 1000);
// });

// const consumePromiseFive = async () => {
//   try {
//     const response = await promiseFive;
//     console.log("response", response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromiseFive();

// const getAllUsers = async () => {
//   try {
//     const res = await fetch("https://randomuser.me/api/");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// getAllUsers();

//******************************Fetch
fetch("https://randomuser.me/api/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
