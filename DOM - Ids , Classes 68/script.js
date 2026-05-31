console.log("Hello")

// let Boxes = document.getElementsByClassName("box")
// console.log(Boxes)

// Boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "Green";
console.log(document.querySelectorAll(".box"))

// To color all the boxes red we cannot use .style.backgroundColor = "red" because it sfor only single element , So we have to use loops instead

document.querySelectorAll(".box").forEach (e =>{
    console.log(e)
    e.style.backgroundColor = "Blue"
})

document.getElementsByTagName("div")

e = document.getElementsByTagName("div")
e[2].matches("#red")
// Gives TRUE/FALSE when runned in console

document.querySelector(".container").contains(e[2])
// gives true and false if run in the console

