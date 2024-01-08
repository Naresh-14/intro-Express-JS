const express = require('express')
const app = express()

app.get('/', (request, response) => {
  let date = new Date()
  response.send('Hello World!')
})

app.get('/date', (request, response) => {
  let date = new Date()
  response.send(`Today Date is ${date}`)
})

app.listen(3000)
