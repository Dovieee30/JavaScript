const express = require('express')
const app = express()
const port = 3000

app.use(express.static(`public`))

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/blog', (req, res) => {
  res.send('Hello World!')
})
app.get('/blog/:slug', (req, res) => {
    console.log(req.params)
    console.log(req.query)
  res.send(`Hello World! ${req.params.slug} and {req.params.second}`)
})

// app.get('/contact', (req, res) => {
//   res.send('Hello contact me!')
// })
// app.get('/blog/python', (req, res) => {
//   res.send('Hello blog pythonn!')
// })
// app.get('/blog/javascript', (req, res) => {
//   res.send('Hello blog')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
