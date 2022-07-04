//Functions

function helloWorld()
{
	document.write("Hello ");
	document.write("Everyone !!<br/>");
}

function getNewsFromDatabase()
{
	//A function is used for a feature
}

helloWorld()

let ok = "OK";

function functionName()
{
	let ok2 = "OK OK !!";
	document.write(ok, "<br/>");
	document.write(ok2, "<br/>");
}
functionName();


function sum(nb1, nb2)
{
	return nb1 + nb2;
}

let result = sum(4, 9);
console.log(result);

function sub(nb1 = 0, nb2 = 0)
{
	return nb1 - nb2;
}

let n1 = 10;
let n2 = 12;
document.write(sub(n2, n1));
//console.log(ok2);//Error because the variable is not global

function someFunction()
{
	let data = 13;
	function anotherFunction()
	{
		document.write("<br/>", data, "<br/>");
	}
	anotherFunction();
}

someFunction();

let hi = function helloEveryone()
{
	document.write("HELLO EVE !<br/>");
};
hi();

let yes = (x, y) => {return x / y};
document.write(yes(12, 2));
