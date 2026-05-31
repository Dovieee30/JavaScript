let arr = [1, 2, 3, 4, 5]
//  index  0, 1, 2, 3, 4
arr[0] = 666;

// console.log(arr);
// console.log(typeof arr)

// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

console.log(arr.toString())
console.log("After Joining",arr.join(" and "))
console.log(arr.pop()) // removes the last element and returns it
console.log(arr.push(100))
console.log(arr)
console.log(arr.push("Debss"))// adds last element to the beginning of the array
console.log(arr)

arr.shift() // removes the first element and returns it
console.log(arr)
arr.unshift("Debashree") // adds an element to the beginning of the array
console.log(arr)

delete arr[5]
console.log(arr)
console.log(arr.length)
console.log(arr[5]) // undefined

let a1 = [3, 2, 1]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9, 10, 11]
console.log(a1.concat(a2, a3))

console.log(a1.sort())

console.log(a1.splice(1,2)) // removes 2 elements starting from index 1 and returns the removed elements
console.log(a1)
console.log(a2.splice(1,2,444,555))
console.log(a2)

console.log(a3.slice(0, 2))
