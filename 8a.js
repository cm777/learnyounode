var http = require('http');

function httpGet(callback){

	return http.get(process.argv[2], 
		function(response) {
			var buffer = '';

			response.setEncoding('utf-8');

			response.on('error', function(e) {
				callback({err: e});
			});

			response.on('data', function (data) {
				buffer += data;
			});

			response.on('end', function() {
	            callback({err: null, len: buffer.length, text: buffer});
	        });
	});
}

httpGet(function (result) {
	if (result.err)
		return console.error(result.err);

	console.log(result.len);
	console.log(result.text);
});