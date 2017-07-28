class Invoice {
	companyProfile : string;

	constructor(public name, public city, public state) {
		this.companyProfile = name + ", " + city + ", " + state;
	}
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'Texas');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'Texas');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
