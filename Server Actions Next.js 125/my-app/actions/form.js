"use server"

import fs from "fs/promises"

  export const submitAction = async (e) => {
  
    const name = e.get("name")
    const add = e.get("add")
    console.log(name, add)
    await fs.writeFile("Debss.txt", `Name is ${name} and Address is ${add}`)

  }