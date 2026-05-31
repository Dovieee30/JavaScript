// write a program to calculate factorial of a number using reduce and using for loops

let a = 6 

function factorial(num){
    let arr = Array.from(Array(num + 1).keys())
    // returns a random array from 0 to num-1 so we added +1

    console.log(arr.slice(1, ))   
    // to remive 0 we sliced

    let c = arr.slice(1, ).reduce((a, b) =>{
        return a*b
    })
    console.log(c)
}


function factor(number){
    let fact = 1
    for(let i = 1; i <= number; i++){
        fact = fact * i
    }
    return fact
}


factorial(a)
console.log(factor(a))
