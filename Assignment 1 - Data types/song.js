//This script will show all the details of my favorite son "Love me Like you do". The details will be printed on the screen, so that the users can easily view them.

// The bottom lines before a return key shows the variable declaration for different attributes of the song.

var songName = "Love Me Like You Do"; //String type variable delaration
var albumName = "Fifty Shades Of Grey";
var releaseDate = "7 January 2015";
var recordingYear = 2008; //Numeric type variable declaration
var songLength = "4:12"
var genre = "Electropop"
var Studio = ["MXM (Los Angeles and Stockholm)","Wolf Cousins (Stockholm)","The RedRoom (Gothenburg)"]; //Array type variable declaration
var label = ["Cherrytree","Interscope","Republic"];
var songWriters = ["Max Martin","Savan Kotecha","Ilya Salmanzadeh","Ali Payami","Tove Nilsson"];
var producers = ["Max Martin", "Ali Payami"];


//Below block of code displays all the values that are stored in variable in a neat format so that end user could understand the same
console.log("Name of the Song is : "+songName);
console.log("Name of the Album is : "+albumName);
console.log("Date of Song Release was : "+releaseDate);
console.log("Year of Song Recording was : "+recordingYear);
console.log("Length of the Song is : "+songLength);
console.log("Genre of the Song is : "+genre);
console.log("Studios in the song was recorded are : " +Studio[0]+", "+Studio[1]+", "+Studio[2]);
console.log("Labels of the Song are : "+label[0]+", "+label[1]+", "+label[2]);
console.log("Name of the Song Writers are : "+songWriters[0]+", "+songWriters[1]+", "+songWriters[2]);
console.log("Name of the Song Producers are : "+producers[0]+", "+producers[1]);