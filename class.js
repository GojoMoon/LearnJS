//Object-oriented class Prototypes

class MusicPlayer
{
	constructor(filetype)
	{
		this.filetype = filetype;
		// console.log(this.filetype);
	}

	static hello()
	{
		return "Hello World !<br/>";
	}

	getfiletype()
	{
		return this.filetype;
	}

	setfiletype(new_filetype)
	{
		this.filetype = new_filetype;
	}
}

MusicPlayer.prototype.filename = "/home";
MusicPlayer.prototype.hello2 = function() {return "Hello !<br/>";};

let song = new MusicPlayer("MP5");
console.log(song.getfiletype());

song.filetype = "MP4<br/>";
document.write(song.filetype);
document.write(MusicPlayer.hello());

document.write(song.filename);
song.filename = "/root";
document.write(song.filename, "<br/>");
delete song.filename;

document.write(song.hello2());


//Prototype
// function MusicPlayer(filetype)
// {
// 	// this.filetype = filetype;
// 	var filetype = filetype; //"this" makes the variable public instead of private
// 	this.filetype = function()
// 	{
// 		return filetype;
// 	}
// };

// MusicPlayer.hello = function() {return "Hello World !<br/>";};
// document.write(MusicPlayer.hello());

// MusicPlayer.data = 14;
// document.write(MusicPlayer.data, "<br/>");

// document.write(song.filetype(), "<br/>");

