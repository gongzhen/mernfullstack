var fs = require('fs')

var fileName = process.argv[2]

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

console.log(str.split(/\r\n|\r|\n/).length - 1) 
