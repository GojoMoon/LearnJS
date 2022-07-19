//Error


// let ack = 1337;
// console.log(ack);
/*
	Error
	TypeError, RangeError, SyntaxError
	internalError, EvalError
*/

// try
// {
// 	//Code who can have an exception
// 	// throw new Error("This is a mistake");
// }
// catch(e)
// {
// 	// console.log(e);
// 	// console.log(e.message);//The error message
// 	// console.log(e.stack);//The file where there is the error
// 	// console.log(e.lineNumber);//The error line
// 	// console.log(e.fileName);//Name of the file with the error
// 	if(e instanceof TypeError)
// 		console.log();
// 	else if(e instanceof RangeError)
// 		console.log();
// 	else
// 		console.log();
// }
// finally
// {
// 	document.write("OK");
// }

//-----------------------------------------------


// function MyError(message)
// {
// 	const err = new Error(message);
// 	err.logfile = 'logs/myerror.log';
// 	err.code = 'INITIALIZATION_DATABASE_ERROR';
// 	err.message = message || "Classic Error";

// 	return err;
// }

// CustomException.prototype = Object.create(Error.prototype);

// throw new MyError("Problem");

//-----------------------------------------------

class MySpecialException extends Error
{
	constructor(code, ...params)
	{
		super(...params);

		this.name = "Name error";
		this.code = code;
	}
}

try
{
	throw new MySpecialException(301);
}
catch(s)
{
	console.error(s.code);
}