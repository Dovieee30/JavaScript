const fs = require("fs")
// const fs = require("fs/promises")


console.log(fs)
console.log("starting")
// fs.writeFileSync("Deb.txt","Deb is a good Girl")

fs.writeFile("Debss.txt","Debss is a Smart Girl", ()=>{
    console.log("Done")
    fs.readFile("Debss.txt",(error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Debss.txt"," and she is always hehhe", (e, d)=> {
    console.log(d)
})

console.log("ending")