const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('SOY YOGUIS')
})
 
app.listen(80)