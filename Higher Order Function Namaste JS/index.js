
//PRO Code to print area , perimeter and diameter of circle using radius by reusable logic code blocks

const radius = [1, 2, 3, 4]

const area = function (radius) {
    return Math.PI * radius * radius;
}
const perimeter = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}


console.log(calculate(radius, area));
//or Map is higher order function it is use to map array : radius , with the logic : area , automatically
console.log(radius.map(area));

console.log(calculate(radius, perimeter));
console.log(calculate(radius, diameter));




//General Code to print area , perimeter and diameter of circle using radius

// const radius = [1, 2, 3, 4]

// const area = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(area(radius));


// const perimeter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(perimeter(radius));


// const diameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(diameter(radius));



