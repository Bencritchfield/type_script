// boolean
let paidAccount : boolean = false;

//number
let age: number = 23;
var taxRate : number = 7.5;

//string
var fullName : string = "Ben Critchfield";

// array
var ages : number[] = [33, 5, 66, 11]

// Tuple
let player : [numbet, string];
player = [3, 'Corerra'];

//enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// any
var apiData : any[] = [123, 'Ben', false];

// void
function printOut(msg: string) : void {
	console.log(msg);
	alert(msg);
}