//Conditions
let name = prompt("What your name?");

if (name === "Jordan")
{
	document.write("Yes !<br/>");
	console.log("True !");
	let number = 6;

	if (number === 6)
	{
		document.write("Amazing !!");
	}
}
else
{
	document.write("No !");
	console.error("False !");
}
	
let x = prompt("Number?");
x = parseInt(x);
if (x < 0)
	document.write("< 0");
else if (x > 10) 
	document.write("> 10");
else
	document.write(x);


let y = 1;
let z = "Yes";

switch(y)
{
	case "Yes":
		document.write("z = Yes");
		break;

	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		document.write("y < 5");
		break;

	case 5:
		document.write("y = 5");
		break;

	default:
		alert("No recognized value...");
		break;
}

let a = 15;
let b = (a > 10 ) ? true : false;
document.write(b);
