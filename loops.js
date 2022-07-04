//Loops

let loop = 0;

while(loop < 10)
{
	document.write(loop, "<br/>");
	loop++;
}

// Not understood the ineter of this function
// let i = 0;
// do 
// {
// 	document.write(loop, "<br/>");
// 	i--;
// }
// while(i > 0);

for(let i = 0 ; i < 25 ; i++) 
{
	document.write("Good !!<br/>");
	if(i === 5)
		continue;
	document.write("Hello !! <br/>");

	if (i === 20) 
		break;
}

// for(let element in sac)
// for...in
// for...on
