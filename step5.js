var fs = require('fs')

var path = process.argv[2]

var type = process.argv[3]

var buf = fs.readdir(process.argv[2], function (err, data){
	if(err) {
		throw err;
	}
	countFile(data)	
})

var countFile = (list) => {
	var res = []
	list.forEach((name, index) => {
		var nameList = name.split(".");
		if(nameList[1] === type) {
			console.log(name)
		}
	})
}




