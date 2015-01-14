var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

	var stream = fs.createReadStream(process.argv[3]);
	
	stream.on('error', function (err) {
		res.end(err.message);
	});

	stream.pipe(res);
});

server.listen(process.argv[2]);