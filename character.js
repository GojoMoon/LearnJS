//character strings

let c = "Hello World";
let c2 = new String("Hello World");

let random = "red";
let random2 = "blue";

document.write(typeof c + "<br>");
document.write(typeof c2 + "<br>");

if(random == random2)
	document.write("Yes<br>");
else
	document.write("No<br>")

document.write(random.charAt(0) + "<br>");//First Character
document.write(random.length + "<br>");//Number of characters
document.write(random.charAt(random.length - 1) + "<br>");
document.write(random[1] + "<br>");
document.write(random[random.length - 1] + "<br>");

//-----------------------------------------------

let fname = "Lux";

document.write(`Bonjour ${fname}, are you fine ?<br>`);

let sentence = "Hi, I'm learning to program in javascript.";

document.write(sentence.concat(".."));
document.write(sentence.startsWith("H"));
document.write(sentence.endsWith("H") + "<br>");

let pad = "M";
document.write(pad.padEnd(10, ".") + "<br>");

let trim = "   HI  . "
document.write(trim.trim() + "<br>");
document.write(sentence.indexOf(",") + "<br>");

document.write(sentence.includes(",") + "<br>");

let pad_new = pad.repeat(3)
document.write(pad_new + "<br>");
document.write(pad_new.replace("M", "A") + "<br>");
document.write(pad_new.replaceAll("M", "A") + "<br>");
document.write(pad_new.toLowerCase() + "<br>");//Tiny
document.write(pad_new.toUpperCase() + "<br>");//Caps

