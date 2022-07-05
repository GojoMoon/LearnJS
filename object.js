//Object-oriented programming

class MusicPlayer
{
	constructor(format)
	{
		this.format = format;
		// console.log(this.format);
	}

	play()
	{
		console.log("Reading in progress...");
	}

	getFormat()
	{
		return this.format;
	}

	setFormat(new_format)
	{
		this.format = new_format;
	}
}


let player = new MusicPlayer("MP3");
document.write(player.getFormat());
player.play();
player.setFormat("<br/>MP4"); //To modify
document.write(player.getFormat());
//Or
player.format = "<br/>M4A";
document.write(player.getFormat());
