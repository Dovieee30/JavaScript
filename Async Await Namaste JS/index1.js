
//Before async and await
function getData1() {
    p.then(res => console.log(res));
}
getData1();

//after async and await
async function handlePromise() {
    const result = await p;
    console.log(result);
}
handlePromise();