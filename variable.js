//Below is the discription about "var", "let" and "const" keywords used for variable and other declaration in Javascript.

//VAR

/* 
var is a keyword used to define a variable in Javascript. A variable of any type can be declared with var keyword. Var defers from let in a way where declaration scope 
is different for both the var and let. Variables declared with var keyword have function scope. The scope of a variable declared with var is for a particular rather 
than a specific block. */

//LET

/*
let is another keyword used for variable declaration in Javascript. Any type of variable can be decalared using let keyword. A variable declared with let keyword has a block 
scope unlike function scope. The variable can be used within the scope where it is declared and becomes unavailable once the scope is changed.
*/

//CONST
/*
const is a keyword used for declaring contanst in Javascript. A value declared with const is similar to let in aspect of scoping but it is constant, which means the value 
defined for it cannot be changed by any means. When a array is declared with CONST keyword, then, values can be pushed in the array, but the inital lenght declaration cannot
be changed later
*/


//Example of Var Keyword

/* Function which will show the name of the user. We need to inout name and based on the name that is entered it will use a if clause to decide the corresponding Last name for
name entered
*/

function showVarUsage(name)
{
	if(name === "Rahul")
	{
		var lastName = "Salunkhe";
	}
	else
	{
		var lastName = "Patil"
	}
	console.log("The first name of user is " +name + " and the last name is " +lastName); /*This console shows that the variable declared with VAR is for whole function scope
	and not block scope */
}

showVarUsage("Rahul");


//Example of Let Keyword

/* Function which will show the name of the user. We need to inout name and based on the name that is entered it will use a if clause to decide the corresponding Last name for
name entered
*/

function showletUsage(name) //This function will give out an error.
{
	if(name === "Rahul")
	{
		let lastName = "Salunkhe";
	}
	else
	{
		let lastName = "Patil"
	}
	console.log("The first name of user is " +name + " and the last name is " +lastName); /* This console shows that the variable declared with LET is for block scope and 
	not for whole function scope */ 
}

showletUsage("Monish");


//Example of Cont Keyword 

/*
Function which will show the name of the user. We need to inout name and based on the name that is entered it will use a if clause to decide the corresponding Last name for
name entered
*/
function showConstUsage(name)
{
	const lastName = " ";
	if(name === "Rahul")
	{
		lastName = "Salunkhe";
	}
	else
	{
		lastName = "Patil"
	}
	console.log("The first name of user is " +name + " and the last name is " +lastName); /*This console shows that the variable declared with CONST cannot be changed*/
}
showConstUsage("Rahul");

