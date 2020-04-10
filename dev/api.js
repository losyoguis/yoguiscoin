const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello WorldSOY YOGUIS')
})
 
app.listen(3000)