//Promise 1
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolvedddd")
    }, 5000);
});

//Promise 2
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolvedddd")
    }, 10000);
});



//Before async and await
//Js engine doesnot wait for the promise to resolve and executes the next line of code.

// function getData1() {
//     p1.then(res => console.log(res));
//     console.log("Hello Debss");
// }
// getData1();



//after async and await 

//Js engine was waiting for the promise to resolve.
//Js engine seems to be waiting but it is not waiting, it just suspend that function handlePromise(), from callstack until the promises p1 and p2 are resolved. 
//when the promises are resolved, it pushes the handlePromise() function back to callstack and executes the remaining code in that function.
//everything executes toegther after 10 seconds.

async function handlePromise() {
    console.log("Hello World");

    const result1 = await p1;
    console.log("Hello Debss1"); 
    console.log(result1);
    
    const result2 = await p2;
    console.log("Hello Debss2"); 
    console.log(result2);  

}
handlePromise();

// async and await are syntactic sugar for promises. It makes the code look synchronous but still runs asynchronously.