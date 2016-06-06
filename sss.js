var http = require('http');

var PORT = 9000;

http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('AY!');
}).listen(PORT, function() {
  console.log('AY! On PORT: ' + PORT + '!');
});
