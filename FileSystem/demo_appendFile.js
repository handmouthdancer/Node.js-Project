var fs = require('fs');

fs.appendFile('newfile1.txt', 'hello content', function (err) {
	if (err) throw err;
	console.log('file saved');
})