//Legacy
/*
	let some_ninja = new Object()
*/

let naruto =
{
	attack: function() { return "Rasengan"; },
	name: "Naruto Uzumaki",
	weapon: "kunai"
};

document.write("<h2>Literal writing</h2>");
document.write(naruto.name + "<br>");
document.write(naruto.attack() + "<br>");

//-----------------------------------------------

function Ninja(name, weapon)
{
	this.attack = function()
	{
		return "Rahhh !!";
	};

	this.name = name || "Naruto Uzumaki";
	this.weapon = weapon || "Shuriken";
}

document.write("<h2>Constructor via function</h2>");
let hinata = new Ninja("Hinata Hyûga");
document.write(hinata.name + "<br>");
document.write(hinata.attack() + "<br>");

//-----------------------------------------------

class Genin
{
	constructor(name = "Naruto Uzumaki", weapon = "Shuriken")
	{
		this.name = name;
		this.weapon = weapon;
	};

	attack()
	{
		return "Rohhhh !!";
	};
}

class Shuunin
{
	defend()
	{}
}

document.write("<h2>Constructor via class</h2>");
let sasuke = new Genin("Sasuke Uchiha", "Shuriken Fuma");
document.write(sasuke.name + "<br>");
document.write(sasuke.attack() + "<br>");