var fs = require('fs')

var fileName = process.argv[2]

var buf = fs.readFile(process.argv[2], function callback(err, data){
	if(err) {
		throw err;
	}
	// console.log(data.toString())
	countNewLine(data.toString())	
})

var countNewLine = str => {
	// console.log(data)
	console.log(str.split(/\r\n|\r|\n/).length - 1)
}



