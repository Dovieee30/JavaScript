import fs from "fs/promises"

let a = await fs.readFile("Debss.txt")
let b = await fs.appendFile("Debss.txt","\n\n\nThis is a Good promise")

console.log(a.toString(),b)

