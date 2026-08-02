// all Free API's link : https://api.github.com/
//i have used :  "user_url": "https://api.github.com/users/{user}"

const API_URL = "https://api.github.com/users/dovieee30";

async function getUser() {

    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    
    console.log(jsonValue);

    //General
    // fetch().then(res => res.json()).then(res => console.log(res));

}
getUser();


/* 


    fetch() => Response.json() => jsonValue (result)

    fetch() : It is a promise and gives you a response object when the promise is resolved which takes some time.
    response object : is readable stream of data, which is not in the form of json
    ,so we need to convert it into json using response.json() method.
    response.json() : is also a promise that is resolved and then gives result.

 */