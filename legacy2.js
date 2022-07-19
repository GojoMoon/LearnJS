//Legacy

document.write("<h2>Legacy part 2</h2>");

function Ninja2(name) //Parent
{
	this.attack = function() {return "Aya !!"; };
	this.name = name;
}

function SuperNinja(name = "unknown", weapon) //Child
{
	Ninja2.call(this, name);
	this.weapon = weapon;
}

// SuperNinja.prototype = Object.create(Ninja2.prototype); //Cloning (two distinct objects)
SuperNinja.prototype = Ninja2.prototype; //Linking one prototype to another

SuperNinja.prototype.age = 24;

let shikamaru = new SuperNinja("Shuriken");

console.log(SuperNinja.prototype);
console.log(Ninja2.prototype);

// let shikamaru = new Object(); //Object.create(Ninja2);
// shikamaru.name = "Shikamaru";
// document.write(shikamaru.name);

class Ninja3
{
	constructor(name = "Minato")
	{
		this.name = name;
	}
}

class SuperNinja2 extends Ninja3
{
	constructor(name = "Minato", weapon = "kunai")
	{
		super(name);
		this.weapon = weapon;
	}
}

let neji = new SuperNinja2("Neji Hyûga", "kunai");
document.write(neji.name + "<br>");
document.write(neji.weapon + "<br>");