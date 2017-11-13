var http = require('http');
var os = require('os');
var requestCount = 0;
var handler = function(request, response) {
  response.writeHead(200);
  response.end("This is running in pod " + os.hostname() + "\n");
}

var www = http.createServer(handler);
www.listen(8080);
