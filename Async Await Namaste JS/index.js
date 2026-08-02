/* 
   what is async?
   -> async is a keyword that is used before a function to create an async(asynchronous) function.
   -> Always returns a promise.
   -> If the function returns a value, then it wraps it into promise and returns promise.
*/

//If async function returns a promise
const p = new Promise((resolve, reject) => {
    resolve("Promise is resolved")
});
p.then(res => console.log(res)); 


//If async function returns a value
async function getData() {
    return "Hello Debss";
}
const data = getData();
console.log(data); //prints the promise object
data.then(res => console.log(res)); //prints the value returned by promise



/*
   what is await?
   -> await is a keyword that can only be used before promise inside an async function.
   -> It is used to resolve a promise and returns the value of the promise.
   -> It makes the code look synchronous but still runs asynchronously.
*/