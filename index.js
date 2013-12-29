var static = require('node-static');
var http   = require('http');
var file   = new static.Server('./public');

var port = process.env.PORT || 8080;
var server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);

server.on('listening', function(){
  console.log('Server listining on: ' + port);
})