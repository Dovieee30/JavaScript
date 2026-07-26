
//MAP : Maps each element of an array to transform it to a new value in the form of output array.

const arr = [1, 2, 3, 4, 5];

//Double the array
function double(x){
    return x * 2;
}

//Triple the array 
function triple(x){
    return x * 3;
}

//Binary array 
function binary(x){
    return x.toString(2);
}

const output = arr.map(double)
// or
const output1 = arr.map(function double(x){
    return x * 2;
}
)
//or
const output2 = arr.map( (x) => x * 2 )

console.log(output)
console.log(output1)
console.log(output2)


