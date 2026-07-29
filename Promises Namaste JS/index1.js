const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);
console.log(user);

//console Output
//Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response

//3 states of promises
//pending : take some time to get the data 
//fulfilled : data is fetched successfully
//rejected : 

//attaching
user.then(function(data){
    console.log(data);
});

//Promises Objects are immutable (cannot be changed) after fullfilled or resolved.
//Promise can be resolved just once (runs atleast once) - gives rust to the user
