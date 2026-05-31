const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log('GET request received')
  res.send('Hello World777!')
})
app.post('/', (req, res) => {
  console.log('POST request received')
  res.send('Hello Worldddd7!')
})
app.put('/', (req, res) => {
  console.log('PUT request received')
  res.send('Hello Worldddd7ddd!')
})


app.get("/index", (req, res) => {
  console.log("GET requesttt received")
  res.sendFile('Templates/index.html', { root: __dirname })
})


app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

