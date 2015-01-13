var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], whenFinished);

function next(err, buffer) {
	for (var i = 0; i < buffer.length; i++) {
		console.log(buffer[i]);
	}
}

function whenFinished(err, list){
	if (err)
		next(err);

	var buffer = [];

	for (var i = 0; i < list.length; i++) {
		
		var file = process.argv[2] + '/' + list[i];

		if (path.extname(file) === ('.' + process.argv[3]))
			buffer.push(list[i]);
	}

	next(null, buffer);
	
}