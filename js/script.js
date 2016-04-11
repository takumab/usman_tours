$(document).ready(function(){
	$(".button-collapse").sideNav();

	//Slider
	$(".slider").slider({indicators: false});

	//Parallax
	$(".parallax").parallax();

	var greeting = function(name){
	console.log("Great to see you again," + " " + name);
	}

	greeting("Takuma");

});

