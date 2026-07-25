console.log("start");

function cb(){
    console.log("call back");
}

setTimeout(cb, 0);
console.log("end");


//millions
//Hold the thread for 10 seconds as JS is single threaded Synchronous Language
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("While expired")