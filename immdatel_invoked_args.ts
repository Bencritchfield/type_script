// function expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string) {
	return first + " " + last;
}

console.log(fullName('Ben', 'Critchfield'));

//immediately invoked verision
(function (first : string, last : string) {
	console.log(first + " " + last);
})('Critchfield', 'Ben');
