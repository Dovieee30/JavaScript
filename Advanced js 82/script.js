async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(50);
        }, 1000);
    });
}


function sum(a, b, c){
    return a + b + c;
}


// IIFE - Immediately invoke function expression
// async and function together is not possible without IIFE because async function declaration is not allowed in global scope. So we can use IIFE to create an async function and immediately invoke it.

(async function(){
    console.log(a1) 
    // hosting


    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
    // console.log(x,y,rest)

    let o = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }
    let {a, b} = o; 
    console.log(a, b);

    let arr = [1, 2, 3, 4]
    // console.log(arr[0] + arr[1] + arr[2]);
    // console.log(sum(arr[0] , arr[1] , arr[2]));
    console.log(sum(...arr));

    var a1 = 6;
    // hosting - specified "variable" declaration is moved to the top of the code before execution but value remains undefined

})()
