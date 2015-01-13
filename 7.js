var http = require('http');

function httpGet(callback){

	return http.get(process.argv[2], 
		function(response) {

			response.setEncoding('utf-8');

			response.on('error', function(e) {
				console.error(e);
			});

			response.on('data', function (data) {
				console.log(data);
			});

			response.on('end', function() {
	            callback('# this is the end!!!');
	        });
	});
}

httpGet(function (str) {
	//console.log(str);
});