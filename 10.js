var net = require('net');

var server = net.createServer(function (socket) {
    socket.end(now() + '\n');
});

server.listen(process.argv[2]);

function now () {
	var date = new Date();

	return date.getFullYear() + '-' + 
		 prefixZero(date.getMonth()+1) + '-' +
		 prefixZero(date.getDate()) + ' ' +
		 prefixZero(date.getHours()) + ':' +
		 prefixZero(date.getMinutes());
}

function prefixZero (num) {
	return ('0' + (num)).slice(-2);
}