app.use(express.static(__dirname + '/src/'));

var fs = require('fs');
var https = require('https');
var app = require('express')();
var options = {
   key  : fs.readFileSync('server.key'),
   cert : fs.readFileSync('server.crt')
};

app.listen(process.env.PORT || 80);
