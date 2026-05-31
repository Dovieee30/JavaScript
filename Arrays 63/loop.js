let a = [1, 93, 5, 6, 88]

// for(let i = 0; i < a.length; i++){
//     console.log(a[i])
// }

// a.forEach(( value, index, arr) => {
//     console.log(value, index, arr)
// })


let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key, element)
    
}


for (const element of a) {
    console.log(element)
}

