const step6module = require('./step6module')

var path = process.argv[2]

var ext = process.argv[3]

function callback(err, data) {
	if(!err) {
		data.forEach((name, index) =>{
			console.log(name);
		})
	}
}

step6module(path, ext, callback)


