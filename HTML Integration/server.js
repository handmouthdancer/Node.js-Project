var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	res.write('mm');
}).listen(8080);