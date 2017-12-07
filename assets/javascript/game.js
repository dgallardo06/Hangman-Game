var wins = 0;
var guessesLeft = 0;
var guesses = "";

var list = ["tree", "stocking", "snowman", "santa", "present", "rudolph", "ornament"];

document.onkeyup = function (event){

	var playerGuess = event.key;

	var words = list[Math.floor(Math.random() * list.length)];

	// var blanks = list.length;

	//Display a blank space for each letter in word chosen
	for (var i = 0; i < list.length; i++){
		var blankDivs = document.createElement("div");
		blankDivs = document.createTextNode("_ ");
		word.append(blankDivs);
	}

	console.log(words);


}