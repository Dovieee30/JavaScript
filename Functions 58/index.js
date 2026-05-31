function nice(name) {
    console.log("Hey " + name + " You are nice!")
    console.log("Hey " + name + " You are very nice!")
    console.log("Hey " + name + " You are very very nice!")
    console.log("Hey " + name + " You are very very very nice!")
}

// nice("Debss")
// nice("Debashree")

function sum(a, b, c = 3) {
    // console.log(a+b)
    console.log(a, b, c)
    return a + b + c 
}

// sum(10,10)

result1 = sum(10, 10)
result2 = sum(20, 10)
result3 = sum(30, 10, 1)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log( "Iam an Arrow Function", x)
}

func1(33);
func1(55);
func1(66);