const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

const server = app.listen(0, () => {
    console.log(`Example app listening on port ${server.address().port}`)
})

// bootstarp - create basic website using its html, css and js files

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express - to us eejs template using there githubb repo 