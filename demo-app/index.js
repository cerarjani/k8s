const express = require('express')
const app = express()
const port = 3000

let  counter = 0

app.get('/', (req, res) => {
    res.send(`Visit count: ${++counter}. Config map variable ${process.env.MY_NAME}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`)
})