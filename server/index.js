const express = require('express')
const app = express()
const port = 3000
const ip = require('ip')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${ip.address()}:${port}`)
})

