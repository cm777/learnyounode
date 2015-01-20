var fs = require('fs');

var content = fs.readFileSync(process.argv[2], 'utf8');

var count = content.split('\n').length - 1;

console.log(count);
