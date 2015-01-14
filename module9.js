var http = require('http');

function httpGet(url, callback){

	return http.get(url, 
		function(response) {
			var buffer = '';

			response.setEncoding('utf-8');

			response.on('error', function(e) {
				callback({"err": e});
			});

			response.on('data', function (data) {
				buffer += data;
			});

			response.on('end', function() {
	            callback({"err": null, "text": buffer});
	        });
	});
}

module.exports = httpGet;