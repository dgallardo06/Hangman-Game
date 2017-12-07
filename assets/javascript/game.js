var wins = 0;
var guessesLeft = 0;
var guesses = "";

var list = ["tree", "stocking", "snowman", "santa", "present", "rudolph", "ornament"];

document.onkeyup = function (event){

	var playerGuess = event.key;

	var words = list[Math.floor(Math.random() * list.length)]; //picks random word from list
	var numChar = words.length; //determines how many letters in word
  	console.log(numChar);


	//Display a blank space for each letter in word chosen
	for (var i = 0; i < numChar; i++){
		var blanks = document.createElement("div");
		blanks = document.createTextNode("_ ");
		//word.append(blanks);  ---this causes the blanks for each word to appear next to each other
	} 

	//document.getElementById("word").innerHTML = blanks; --- this causes for [object text] to appear instead of the lines

	console.log(words);

	//Add each guessed letter to list
	guesses = guesses + " " + playerGuess;

	//Show letters guessed
	var remaining = document.getElementById("guessed");
	remaining.innerHTML = guesses;

}

