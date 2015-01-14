var httpGet = require('./module9');

var urls = [process.argv[2],process.argv[3],process.argv[4]];
var results = {};
var count = 0;

urls.every(getContent);

function onEnd(){
	if (count === urls.length) {
		for (var key in results) {
   			console.log(results[key]);
		}
	}
}

function getContent(url, index) {

	return httpGet(url, function (data) {
		count++;

		if (data.err)
			return console.error(data.err);
		
		results[index] = data.text;

		onEnd();
	});

}