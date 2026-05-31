// function getData(){
//     // Stimulate getting data from a server
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(500)
//     }, 2000)
// })
// }

// https://jsonplaceholder.typicode.com/  - url for api link

async function getData() {
    // Stimulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    //    let x = await fetch("https://example.org/post", {
    //         method: "POST",
    //         body: new URLSearchParams({ username: "example", password: "password" 

    //         }),
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
            
          
    //     }); donot work because of CORS policy


    let data = await x.json()
    // let data = await x.text()
    return data
    // return 666
}

async function main() {

    console.log("Loading Modules...")
    console.log("Do Something else...")

    console.log("Load Data...")

    let data = await getData()
    console.log(data)

    console.log("Process Data...")

    console.log("task 2")

}

main()

// data.then((value) => {
//     console.log(data)

// console.log("Process Data...")

// console.log("task 2")
// })

// async is used to wait does same as promises  .....but in a clean code the above is Promise code
// await is written inside async function and it is used to wait for the promise to resolve and then it will return the value of the promise and then we can use that value in our code.


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully 