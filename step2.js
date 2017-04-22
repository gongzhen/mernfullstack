var sum = 0;
process.argv.forEach((num, index) => {
	if(index >= 2) {
		num = parseInt(num, 10);
		sum += num	
	}
})
console.log(sum)