const express = require('express');
const app = express();

app.get ('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
  })

  app.get('/liste.js', function(req, res){
   res.sendFile(__dirname + '/liste.js')
  })

   app.get('/liste', function(req, res){
    res.sendFile(__dirname + '/data.json')

  })





  app.listen(3001, function() {
   console.log('Listening on port 3001')
  })