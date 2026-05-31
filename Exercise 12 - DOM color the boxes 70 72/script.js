console.log("script.js initializing...")

// let boxes = document.getElementsByClassName("box"); or...

let boxes = document.querySelector(".container").children;
console.log(boxes)

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

// Math.ceil(0 + Math.random() * 255) is used to generate random number and ceil is use to provide the next integer to the random number like if 3.666 it gives 4 output


Array.from(boxes).forEach(e =>{
    console.log(e)
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})  