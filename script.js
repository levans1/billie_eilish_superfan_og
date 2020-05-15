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
// variables for the if then
function changeImage(elem){
	document.getElementById("col1").src="images/album2.jpg";
	a=1;
	confettiCheck();
	console.log("run function 1");
}
function goGif(elem){
	document.getElementById("col2").src="images/party.gif"
	document.getElementById("party").play();
	b=1
	confettiCheck(); // the confetti check function is here to check if it is ready to show the confetti yet but it won't until all of them are complete
	console.log("run function 2");
}
function switchImage(elem){
	document.getElementById("col3").src="images/spotify.jpg";
	c=1
	confettiCheck();
	console.log("run function 3");
}
function confettiCheck(){
	if (a==1 && b==1 && c==1) // the if is saying that if a, b, c =1 then the other functions have completed and now it is able to display the confetti
	{
		document.getElementById("confetti").style.display="block";
	}
	console.log("run function 4");
}
function removeConfetti(elem){
if (document.ElementById("confetti").style.display="none";)
{
	document.getElementById("col1").src="images/fader.jpg";
	document.getElementById("col2").src="images/bluecoat.gif";
	document.getElementById("col3").src="images/green-min.png";
	console.log("run function 5");
}
