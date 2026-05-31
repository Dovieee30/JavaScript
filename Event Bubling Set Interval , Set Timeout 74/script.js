let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was Clicked heheheee")
    document.querySelector(".box").innerHTML = "<b>yeyyyyy you are Clicked heheheee</b> Enjoyyy"
})

// events MDM browser Reference 
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right clickkkk pleaseee")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key , e.keyCode)
})
