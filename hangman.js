// Inquirer npm package
// -------------------------------------------------------------------------
var inquirer = require("inquirer");

// Global Variables
// -------------------------------------------------------------------------
var words = require ("./words");
var computersChoice;
var guessesLeft = 10;
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
      var replace = letters.indexOf(letter.userInput.toLowerCase());
      showBlanks[replace] = letter.userInput;
      console.log(showBlanks.join(" ").toLowerCase());
      console.log("Correct!");
      array.push(letter.userInput.toLowerCase());
      if (showBlanks.join(" ").toLowerCase() === letters.join(" ").toString()) {
        console.log("Success! You Won!");
        return;
      }

    }
    // If the user guess is not right, this happens
    // -------------------------------------------------------------------
    else {
      console.log((showBlanks.join(" ")));
      console.log(letter.userInput.toLowerCase() + " :is a wrong guess");
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
