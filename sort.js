// Sort the array [1,10,5,15,2,7,28,900,45,18,27] 

let array = [1,10,5,15,2,7,28,900,45,18,27]
let tab = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Franck"];
let sort = [-2, 14, 1, 4, 92, 21, -123, -3, 0, 1];


array.sort();

document.write(array);
console.log(array.reverse());
console.log(tab.sort());
console.log(tab.sort( (a, b) => a.localeCompare(b) ));
console.log(tab.sort(function(a, b)
{
	return a.localeCompare(b);
}));
console.log(sort.filter(x => x > 0));

let rresult = tab.map(value => "Unknown");
console.log(rresult);
