let arr = [1, 13 , 5, 7, 11];

// let newarr = [];

// for (let i = 0; i < arr.length; i++) {
// const element = arr[i];
// newarr.push(element**2)
// }

let newarr = arr.map((e, indexx, arr) => {
    return e**2
})

console.log(newarr)
//Map returns new array with any condn for example square of each element


const greaterThanSeven = (e) => {
    if(e>7){
        return true
    }
    return false
}
console.log(newarr.filter(greaterThanSeven))


let arr2 = [1, 2, 3, 4, 5]
const red = (a, b) => {
    return a * b
}
console.log(arr2.reduce(red)) 
// Reduce take 1st two elemnt apply mul and takes result apply mul to next and give final one answer - Factorial


console.log(Array.from("Debashree"))
// gives array of each character in string
