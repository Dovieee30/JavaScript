const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);
console.log(user);

//console Output
//Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response

//pending : take some time to get the data 
//fulfilled : data is fetched successfully

//attaching
user.then(function(data){
    console.log(data);
});

//Promises Objects are immutable (cannot be changed) after fullfilled.
