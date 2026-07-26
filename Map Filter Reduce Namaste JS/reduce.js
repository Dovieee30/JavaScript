
//REDUCE : Takes all the elements of an array as input and gives single value output
//reduce has two arguments to pass:  reduce(arguement1, arguement2);
//reduce(arguement1, arguement2); i.e reduce(function, startValue);
//because reduce behaves like a iterative function it needs the anonyomus function : 2 agruements.
//function(arguement1, arguement2); i.e function(arr, curr);
// acc - accumulator acts as a result i.e sum
//curr - current value of the array i.e arr[i] 
//startValue - 0 i.e sum = 0

const arr = [1, 2, 3, 4, 5];

//Sum of array
//OG Code
function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sum(arr));

//PRO Code
const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0)
console.log(output);


//Max of array
//OG Code
function max(){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(max(arr));

//PRO Code
const output1 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0)
console.log(output1);