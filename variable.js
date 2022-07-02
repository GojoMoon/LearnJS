//Variable in JavaScript
var name;
name = "Jordan";
var age = 23;
var myVariable = "Variable";
var real = true; //boolean

document.write("My name is ", name, " and I am ", age, " years old."); //Echo 

age = 32;//Modifies a variable

document.write("\nMy name is ", name, " and I am ", age, " years old. "); //Echo
document.write(typeof age, ";");//Displays the type of variable
document.write(typeof name, ";");//Displays the type of variable
document.write(typeof real);//Displays the type of variable

var name2 = prompt("What is your name?");//Request to the user
document.write(" ", name2);

var age2 = prompt("How old are you?");
//Convert the type of the variable
age2 = parseInt(age2); //Or parseFloat() for strings
document.write(" ", typeof age2);

//Constant
 const PI = 3.14;
 document.write(PI);
