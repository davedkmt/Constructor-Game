// Inquirer npm package
// -------------------------------------------------------------------------
var inquirer = require("inquirer");

// Global Variables
// -------------------------------------------------------------------------
var words = require ("./words");
var computersChoice;
var guessesLeft = 9;
var number;
var dashes = 0;
var letters;
var showBlanks = [];
var guessed = true;
var array = [];
var win;

// Setting the computer to choose random words
// -------------------------------------------------------------------------
computersChoice = words[Math.floor(Math.random() * words.length)];
letters = computersChoice.split("");
dashes = letters.length;
for (i = 0; i < dashes; i++) {
  showBlanks.push("_");
}
// Prompt the user to guess the write letter.
// -------------------------------------------------------------------------

var Word = function() {
  inquirer.prompt([

    {
      type: "input",
      name: "userInput",
      message: "Guess a letter!",
    }

  ]).then(function(letter) {

    // Check the users guess with the letter
    // -------------------------------------------------------------------
    var correct = letters.includes(letter.userInput.toLowerCase());
    if (correct) {
      var replace = letters.indexOf(letter.userInput);
      showBlanks[replace] = letter.userInput;
      console.log(showBlanks.join(" "));
      console.log("Correct!");
      array.push(letter.userInput);
      if (showBlanks.join(" ") === letters.join(" ").toString()) {
        console.log("Success! You won!");
        return;
      }

    }
    // If the guess is not right, this happens
    // -------------------------------------------------------------------
    else {
      console.log((showBlanks.join(" ")));
      console.log(letter.userInput + " :is a wrong guess");
      guessesLeft--;
      console.log("Guesses remaining: " + guessesLeft);
      if (guessesLeft === 0) {
        console.log("Game Over!");
        console.log("See you soon!");
        return;

      }
    }
    Word();
  });
};




Word();
