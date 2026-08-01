//Dummy Promises to demonstrate Promise APIs

const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('P1 success'), 3000);
  setTimeout(() => reject('P1 failed'), 3000);
})

const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('P2 success'), 1000);
  setTimeout(() => reject('P2 failed'), 1000);
})

const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('P3 success'), 2000);
  setTimeout(() => reject('P3 failed'), 2000);
})


// Promise.all : wait for all promises to settle collect and result the array of values after 3s.
// If any promise fails, Immediately it will throw an error after their respective seconds and none of other promises will be successful after throwing the error.
// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.error(err);
//     })


// Promise.allSettled : wait for all promises to settle, regardless of whether they resolve or reject / success or failure and return an array of objects (status: , value: ) format after 3s.
// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.error(err);
//     })


// Promise.race : just like a race only wait for the First promise to settle, regardless of whether it resolves or rejects / success or failure  / fullfilled or rejected and return the value after 1s , output gives only 1st promise as a result.
// Promise.race([p1, p2, p3])
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.error(err);
//     })


// Promise.any : wait for the first promise to settle and it should be Success then return the value after their respective seconds ,ignore the failed promises. 
// output gives only 1st promise as a result. If all promises fails, it will throw an AggregateError.
// AggregateError : returns array of object all the errors that was failed. after 3s
Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err);
        console.log(err.errors) // gives all the errors that was failed.
    })