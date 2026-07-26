const users = [
    {firstName: "Debashree", lastName: "Mal", age: 20},
    {firstName: "Priyanka", lastName: "Mal", age: 39},
    {firstName: "Devleena", lastName: "Mal", age: 15},
    {firstName: "Devraj", lastName: "Mal", age: 20},
];

//List of full names ??
//["Debashree Mal", "Priyanka Mal", ....]
//we have to generate the List Output - MAP

const output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);


//List of age and no. of age
//{ 20 : 2 , 39 : 1,....} 
//we want output as one value of every object- REDUCE 

const output1 = users.reduce(function(acc, curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }

    return acc;

}, {})
console.log(output1);


//Filter out all the firstName people who's age is less than 20
//["Devleena"]
//first we filter the age and then map the output to the firstName of the Object - FILTER & MAP

const output2 = users.filter(x => x.age < 20)
.map(x => x.firstName);
console.log(output2);

//or with Reduce
const output3 = users.reduce(function(acc, curr){
    if(curr.age < 20){
        return [...acc, curr.firstName];
    }
    return acc;
}, [])
console.log(output3);