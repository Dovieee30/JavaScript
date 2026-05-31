/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times




function faultyCalculator( a , b ){

    let r = Math.random() < 0.1; // 10% chance to perform wrong operation

    if ( r == true){
        console.log("Performing Wrong Operation")
        console.log("The Addition is :")
        console.log(a - b);
        console.log("The Multiplication is :")
        console.log(a + b);
        console.log("The Subtraction is :")
        console.log(a / b);
        console.log("The Division is :")
        console.log(a ** b);
       
    }
    else{
        console.log("Performing Correct Operation")
        console.log("The Addition is :")
        console.log(a + b);
        console.log("The Multiplication is :")
        console.log(a * b);
        console.log("The Subtraction is :")
        console.log(a - b);
        console.log("The Division is :")
        console.log(a / b);
    }
}

faultyCalculator(100, 10); */



let r = Math.random()
let a = prompt("Enter First Number")
let b = prompt("Enter Operation (+ , - , * , /)")
let c = prompt("Enter Second Number")

let o = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

console.log(r)
if (r > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)

}

else{
    c = o[c]
        alert(`The result is ${eval(`${a} ${b} ${c}`)}`) 
}