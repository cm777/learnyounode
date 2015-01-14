var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {

	var transformer = function transformer(chunk){
		var transformed = chunk.toString().toUpperCase();
		console.log(transformed);
		return transformed;
	};

	if (req.method === "POST")
	{
		return req.pipe(map(transformer)).pipe(res);
	}
	else
		res.end('this is not a POST request?\n');

});

server.listen(process.argv[2]);