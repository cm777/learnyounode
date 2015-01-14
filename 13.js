var http = require('http');
var map = require('through2-map');
var url = require('url');

function parsetime (time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	};
}

function unixtime (time) {
	return { unixtime : time.getTime() };
}

var server = http.createServer(function (req, res) {

	var _url = (url.parse(req.url, true));

	var time = new Date(_url.query.iso);
	
	res.writeHead(200, {'Content-Type':'application/json'});

	if (_url.pathname.indexOf('parsetime') > -1) {
		return res.end(JSON.stringify(parsetime(time)));
	}
	else if (_url.pathname.indexOf('unixtime') > -1) {
		return res.end(JSON.stringify(unixtime(time)));
	}

	res.writeHead(404);
	res.end('api not found');
});

server.listen(process.argv[2]);