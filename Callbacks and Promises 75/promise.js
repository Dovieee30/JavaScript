console.log('This is promises');

// promise is an object which is used to handle asynchronous operations in JavaScript. It represents a value that may be available now, or in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.


// .then  is used after a fujnction like deb.then() - it first executes the promise function then gives remaining results which is inside .then .. it doesnot executes before promise function .. it sexecutes toggether 


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting")
    }

    else{
        setTimeout(() => {
            console.log("yes i Am Done")
            resolve("debashree")
        }, 3000);
           
    }

})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting2")
    }

    else{
        setTimeout(() => {
            console.log("yes i Am Done2")
            resolve("debashree2")
        }, 3000);
           
    }

})


// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})


// Promise.allSettled - Gives all  the result whetehr its resolved or rejected
// Promise.race - Gives the first fastest result whether its resolved or rejected
// Promise.reject - gives the rejected promise with error data
// Promise.resolve - gives the resolved promise with value data