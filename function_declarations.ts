console.log(fullName('Ben', 'Critchfield'));
// console.log(otherFullName('Ben', 'Critchfield'));
// console.log(thirdFullName('Ben', 'Critchfield'));

function fullName(first : string, last : string) : string {
	return first + " " + last;
}

var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

