
const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")


// ...

app.use('/blog', blog)


// app.use(express.static("public"))

app.use((req, res, next)=> {
    console.log(req.headers);
    req.raman = "I am Raman";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Raman")
    next()
  })

app.use((req, res, next)=> {
    console.log('m2')
    req.raman = "Hello raman"
    next()
  })
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.raman)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})