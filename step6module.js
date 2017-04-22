module.exports = function (dir, ext, callback) {

	var fs = require('fs')

	fs.readdir(dir, function (err, data){
		if(err) {
			callback(err)
		} else {
			countFile(data, ext, callback)		
		}		
	})
}

var countFile = (list, ext, callback) => {
	var path = require('path')
	var res = []
	list.forEach((name, index) => {
		if(path.extname(name) == '.' + ext) {
			res.push(name)
		}
		
	})
	callback(null, res)
}