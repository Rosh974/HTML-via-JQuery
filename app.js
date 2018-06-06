var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile('index.html', { root: '.' })
});

http.listen(3001,function(){
    console.log('listening on : 3001');
});