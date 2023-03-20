let hello = document.getElementById('b1');
let add = document.getElementById('b2');

hello.addEventListener('click', hi);
add.addEventListener('click', added);

function hi()
{
	alert('Hi');
}

function added()
{
	let para = document.createElement('p');
	para.textContent = 'Paragraph added';
	document.body.appendChild(para);
}