
let defaultName = "Socrates";
let mortalMen = ["Socrates", "Alexander", "Phillips"];
var manMortality = (name = "Socrates") => {
	var stringCount = name.length;  //Variable to store string length
	var programFlow = 0; //This is a logic variable which will be set to 0 or more than 0 based on the output of if block for valid string test
	if(stringCount > 0) //if block that will check if the entered string is a valid string or it is blank string
	{
		for(j=0;j<stringCount;j++)
		{
			if(name.charCodeAt(j) == 32)
			{
				programFlow += 1;
			}
			else
			{
				programFlow = 0;
				break;
			}
		}
	}
	if(programFlow > 0) //if the string is blank string then this if block is executed 
	{
		name = "Socrates";
		for(i=0;i<mortalMen.length;i++) //loop to check if the string passed as argument is there is mortal men collectio or not.
		{
			if(name === mortalMen[i])
			{
				return true;
			}
			else
			{
				continue;
			}
		}
		return false;		
	}
	else //if the string is valid string then this else block is executed
	{
		for(i=0;i<mortalMen.length;i++) //loop to check if the string passed as argument is there is mortal men collectio or not.
		{
			if(name === mortalMen[i])
			{
				return true;
			}
			else
			{
				continue;
			}
		}
		return false;		
	}
	
}
console.log("Please add a String Value")
var mortalValue = manMortality('Rahul'); //calling the function with argument
console.log(mortalValue); //print the value returned by function





// Second program for showing the cake is vanilla or chocolate.

var cakeTypes = ["Chocolate","Vanilla","ButterSotch","Strawberry"]; //Array containing different cake types
var ourCakeType = "Vanilla"; //defining our cake type to Vanilla

var showCakeType = (cakeCollection, isChocolate) => { //function to check if the cake if vanilla or not 
	if(ourCakeType == "Vanilla" || isChocolate != true) //first level check to see of the cake is vanilla and not chocolate
	{
		for(i=0;i<cakeTypes.length;i++) //loops through the array to find vanilla type to match with our cake
		{
			if(cakeTypes[i] == ourCakeType) //if vanilla is found it returns the string
			{
				return "The cake is a " +cakeTypes[i] +" Cake";
			}
			else
			{
				continue; //if vanilla is not found it keeps on looping to next items
			}
		}
		return "The cake is other than Vanilla Cake";
	}
	else
	{
		return "The values for Cake and if it is chocolate are not acoording to program requirement"; // if the value passed not vanilla, the programm exists with return value
		
	}
}

console.log("\n");
console.log("\n");

console.log("Please enter the different types of cake and true or false if the cake is chocolate or not");
var cakeValue = showCakeType(cakeTypes, true);
console.log(cakeValue);




