//Array

let someArrayP = [1, "OK", true];//Possibly

let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
let anotherArray = new Array(-2, 14, 1, 4, 92, 21, -123, -3, 0, 1);
let array2d = 
[
	[1, 2, 3], 
	[4, 5, 6]
];
let newSomeArray = Array.of(1, 2, 3, 4, 5, 6);

console.log(newSomeArray);
console.log(Array.isArray(someArray));
console.log(someArray[someArray.length -1]);

someArray[someArray.length -1] = "Sung";
console.log(someArray[someArray.length -1]);

for(let i = 0; i < someArray.length; ++i) 
	document.write(someArray[i] + "<br>");

for(value of someArray)
	console.log(value);

console.clear();
someArray.forEach(item => console.log(item));

someArray.forEach(function(value, index)
{
	console.log(index + " - " + value);
});

let chara = "Hi everyone !";

let someArraySplit = chara.split(' ');
console.log(someArraySplit);

chara = someArraySplit.join(":");
console.log(chara);

console.clear();
console.log(someArray);
//Added elements to the table
someArray.push("Maria", "Luc");
let deletedValue = someArray.pop();
someArray.unshift("Mathias", "Lukas");
someArray.shift();
//
console.log(someArray);
console.log(deletedValue);

someArray.fill("Unknown", someArray.length / 2);
console.log(someArray);

console.log(someArray.indexOf("Salim"));
console.log(someArray.lastIndexOf("Lukas"));
console.log(someArray.includes("Salim"));

// console.log(newSomeArray.find(value => value > 0));
console.clear();
console.log(someArray);
let result = someArray.findIndex(value => value.length > 5);
console.log(result);

console.log(anotherArray);
let subArray = someArray
console.log(subArray);
subArray.splice(2, 1, "Marie", "julien");
console.log(subArray);

//-----------------------------------------------


// let fdata = {0: "Julien", 1: "Laura"};


// let newArray = Array.from(fdata);
// document.write(newArray[1]);