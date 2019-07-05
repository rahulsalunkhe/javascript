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