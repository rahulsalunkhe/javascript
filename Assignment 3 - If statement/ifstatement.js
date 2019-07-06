var menNames = ["Peter","Socrates","Alexander","Phillips"]; //Defines a collection of names who are men
var menMortality = true; //States that men are mortal

if(menMortality) //checks to mortality of men
{
	console.log("Men are mortal");
	for(i=0;i<menNames.length;i++) //loops through the men names array to find out socrates
	{
		if(menNames[i] == "Socrates") //if socrates is found then pass the control to true block
		{
			console.log("Socrates is a man and hence he is immortal");
			break;
		}
		else
		{
			console.log("Socrates not found");
		}
	}
}


console.log("\n");
console.log("\n");

console.log("Showing next program of cake being either chocolate or vanilla");


/// Second program Is cake vanilla or chocolate

var cakeType = "Chocolate" //Defines the type of cake 

if(cakeType == "Chocolate" || cakeType == "Vanilla") //First level decision to check if cake is either chocolate or vanilla
{
	if(cakeType != "Vanilla") //Second level check to decide if cake is vanilla or not
	{
		console.log("Cake is a Chocolate one"); //True block states that the cake is chocolate one
	}
	else
	{
		console.log("Cake is a Vanilla one"); //False block states that the cake is vanilla one
	}
}