// /**
//  let's understand working of promise using code

//     - created an instance of promise using new keyword and stored it into const variable 'promiseOne'.
//     - this promise has Executor which are the its parameter - resolve & reject
//     - these executor run in synchronous manner on the spot whenever an promise is created.
//     - inside promise a const variable 'success' is initialized and declared with boolean 'true'
//     - condition block if --> success (true) ? resolve 'API Fetched Successfully' : else --> reject 'Network Error!'
//     - so we know that condition is true and promiseOne promise has resolved means it will execute its code without any error.

//     - promiseOne has .then() - it is connected with resolve so it will print the message of resolve
//     .catch() - it is connected with reject, it will work when promiseOne has any kind of error.
// */

// const promiseOne = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("API Fetched Successfully");
//   } else {
//     reject("Network Error!");
//   }
// });

// // promiseOne
// //   .then((result) => console.log("Message:", result))
// //   .catch((e) => console.error(e));

// /*
//     - created an instance of promise and stored in into const variable 'mainPromise'.
//     - this new promise has its executor fn - outerResolve, which will run in synchronous manner on the spot when new promise created.
//     - inside promise all the task are run in asynchronous manner.
//     - but here we have thenable situation - thenable situation is when executor fn has its own promise and we here our 'outerResolve' is an executor fn which has its own promise, and its executor fn - innerResolve.
//     - now the main concept to understand here is whenever a Promise is create there can be only one answer either promise  - successful (resolve) or fail (reject), it can never be both answer. In above code the promise was resolved and answer was already finalized when the if block run.

//     - the promise either resolve or reject but in thenable situation promise waits for the inner working to first complete  - in simple language, we can understand by this as 2 rule
//         i. always the first call wins - in the first time whichever is called either resolveFn or rejectFn, promise only work on the first call if resolveFn - then promise resolve, if rejectFn - promise reject and after this if we try to call again the executor fn Promise will ignore it. So the "First call Wins".

//         ii. thenable situation - promise waits for other promise, if the main promise is resolved but it still shows the pending state and wait for the inner Promise this is called thenable situation, and in this the main promise is in lockedin state where it shows pending status but matches the final value based on inner promise.

//     - the same thing happened in the below code, the mainPromise is resolve but still shows the pending state and waiting for innerResolve to resolve and match both promise value.

//     - this whole scenario is know as 'Thenable Situation', where one promise waits for another one.

// */

// const mainPromise = new Promise((outerResolve) => {
//   outerResolve(
//     new Promise((innerResolve) => {
//       setTimeout(() => {
//         innerResolve("API Fetched Successfully");
//       }, 2000);
//     })
//   );
// });

// // console.log("main promise is still pending", mainPromise);
// // mainPromise.then((result) => console.log(result, mainPromise));

// // console.log("main promise is resolved", mainPromise);

// // const mainPromise = new Promise((outerResolve) => {
// //   const innerPromise = new Promise((innerResolve, innerReject) => {
// //     setTimeout(() => {
// //       innerReject("Inner Promise mein ek Error aa gaya!");
// //     }, 2000);
// //   });

// //   const handledPromise = innerPromise.catch((errorReason) => {
// //     console.log("INTERNAL CATCH: Error gaya:", errorReason);

// //     return "Error successfully handled internally, result is good.";
// //   });

// //   outerResolve(handledPromise);
// // });

// // console.log("main promise is pending");

// // mainPromise
// //   .then((result) => {
// //     console.log("MAIN PROMISE FINAL RESULT:", result);
// //   })
// //   .catch((e) => {
// //     console.error("MAIN PROMISE ERROR:", e);
// //   });

// // - in core js we don't have any promise.state or promise.status to find out the actual state of promise but we can do this manually

// const promiseStatus = {
//   status: "PENDING_START",
//   value: null,
// };

// const PROMISE = new Promise((resolve) => {
//   console.log("Current Progress:", promiseStatus.status);

//   resolve(
//     new Promise((innerResolve) => {
//       console.log("Thenable Situation Start:", promiseStatus.status);

//       setTimeout(() => {
//         promiseStatus.status = "FULFILLED";
//         promiseStatus.value = "Data Download Successfully";
//         innerResolve(promiseStatus.value);
//       }, 3000);

//       console.log("Promise is already resolve but waiting for innerResolve");
//     })
//   );
// });

// // PROMISE.then((result) => console.log(`${result}: ${promiseStatus.status}`));

// const fetchAPI = async (callback) => {
//   const response = await fetch("https://randomuser.me/api");

//   if (response.status !== 200) {
//     throw new Error(response.status, response.statusText);
//   }
//   const data = await response.json();

//   console.log(data);
//   callback(data.gender);
// };

// const displayUserInfo = (info) => {
//   console.log("Gender:", info);
// };

// fetchAPI(displayUserInfo);

function userDetails(callback) {
  let name = "kanishq sodhani";
  let age = 22;

  callback(name, age);
}

function printUser(name, age) {
  console.log(name, age);
}

userDetails(printUser);
