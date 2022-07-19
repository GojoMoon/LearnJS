//Number
/*

	Primitive type : 
		undefined
		null
		Boolean (true, false)
		Number -> Number.prototype
		String
		BigInt : Number greater than 2^53
		Symbol

	Other type :
		Object
		Array
*/

let ack = new Number(1337); //NaN
let ack2 = Number(1337);
let ack3 = 1337;

if(ack instanceof Number)
	document.write("ack is a Number<br>");
if(ack2 instanceof Number)
	document.write("ack2 is a Number<br>");
if(ack3 instanceof Number)
	document.write("ack3 is a Number<br>");

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);

let syn = 2 / 3;

if (Number.isInteger(syn))
	document.write("OK<br>");

if (Number.isFinite(syn))
	document.write(syn + "<br>");

document.write(syn.valueOf() + "<br>");
document.write(syn.toString() + "<br>");
document.write(syn.toFixed(2) + "<br>");//Decimal

let testbn = 83921732918731236788732193698217639871263987126343928123;
document.write(testbn + "<br>");
let bn = BigInt(8392173291873129);
document.write(bn + "<br>");