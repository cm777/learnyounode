var fs = require('fs');
var path = require('path');


function listFilteredFiles (dir, ext, callback){
	fs.readdir(dir, function (err, list) {
		whenFinished(err, list, ext, callback);
	});
}

function whenFinished(err, list, ext, callback){

	if (err)
		return callback(err);

	var files = list.filter(function filterByExt (file){
		return (path.extname(file) === '.' + ext);
	});

	callback(null, files);
}

module.exports = listFilteredFiles;
