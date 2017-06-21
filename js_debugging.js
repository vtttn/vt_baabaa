var woolOwners =
  { 
	master: 1,
	dame: 1,
	littleboy: { 
 	location: "down the lane"},
  } ;


 
var bags = haveYouAnyWool(); 
 
function haveYouAnyWool() { 
 for (var i = 0; i < 3; i++) { 
 var totalBags = totalBags + i; 
 } 
 return i; 
}; 
 

function baabaaBlackSheep() { 
 console.log("BaaBaa BlackSheep have you any wool?"); 
 if (bags > 1) { 
 console.log("yes sir, yes sir " + bags + " bags full"); 
  } 
} 
 
function oneForMy() { 
 for (var i = 0; i < 2; i++) { 
 people = Object.keys(woolOwners); 
 var person = people.toString(); 
 console.log("one for my " + person + "\n"); 
 } 
} 
 
baabaaBlackSheep(); 
oneForMy(); 
 
// var boy = Object.keys(woolOwners[2]); 
// var littleBoy = boy[2]; 
 
var whereHeLives = woolOwners.littleboy.location; 
console.log("one for the " + "little boy" + " that lives " + whereHeLives); 
 
// your output should be like baa.png
