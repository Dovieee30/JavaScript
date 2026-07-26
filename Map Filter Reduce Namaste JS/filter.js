
//FILTER : Takes a input array and gives the ouput array filtered with some logic to that array.

const arr = [1, 2, 3, 4, 5];

//filter odd values
function odd(x){
    return x % 2;
}

//filter even values
function even(x){
    return x % 2 === 0;
}

//filter value less than 4
function lessThan4(x){
    return x < 4;
}

const output = arr.filter(even);
//or
const output1 = arr.filter((x) => x % 2 === 0);

console.log(output);
console.log(output1);