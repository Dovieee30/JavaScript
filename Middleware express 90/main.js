const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static('public'))

// Middleware 1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    request.debs = "heheh";
    fs.appendFileSync("logs.txt", `${Date.now()}: ${req.method} ${req.url}\n`)
    console.log(`${Date.now()}: ${req.method} ${req.url}`)
    next()
})


// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!' + req.debs)
})
app.get('/about', (req, res) => {
    res.send('About Us')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
