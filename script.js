// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
// this is where the function is defined 
 

// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
var a=0
var b=0
var c=0
var col1=document.getElementById("col1")
var col2= document.getElementById("col2")
var col3=document.getElementById("col3")
var confetti=document.getElementById("confetti")
// variables for the if then

function changeImage(elem){
if (elem.id == "col1") {
 col1.src="images/album2.jpg";
	a=1;
	confettiCheck();
	console.log("run function 1");
}
else if (elem.id == "col2") {
 col2.src="images/party.gif"
	document.getElementById("party").play();
	b=1;
	confettiCheck(); // the confetti check function is here to check if it is ready to show the confetti yet but it won't until all of them are complete
	console.log("run function 2");
 }
 else if (elem.id == "col3") {
  col3.src="images/spotify.jpg";
	c=1;
	confettiCheck();
	console.log("run function 3");
 }
} 

function confettiCheck(){
	if (a==1 && b==1 && c==1) { // the if is saying that if a, b, c =1 then the other functions have completed and now it is able to display the confetti
		confetti.style.display="block";
	}
	console.log("run function 4");
}

function removeConfetti(elem){
	confetti.style.display="none";
	col1.src="images/fader.jpg";
	col2.src="images/bluecoat.gif";
	col3.src="images/green-min.png";
	console.log("run function 5");
	// this function is an on click that removes the confetti and then changes the images so that they are hoverable and new so it is adding something new and cool and not just removing a previous class
}
