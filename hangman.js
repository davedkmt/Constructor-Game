// Inquirer npm package
// -------------------------------------------------------------------------
var inquirer = require("inquirer");

// Global Variables
// -------------------------------------------------------------------------
var words = ["node", "react", "javascript", "html", "mysql"];
var userGuess = process.argv[2];
var computersChoice;
var guessesLeft = 10;
var number;
var dashes = 0;
var letters;
var showBlanks = [];


// Prompt the user to guess the write letter.
// -------------------------------------------------------------------------

function play() {
  inquirer.prompt([

    {
      type: "input",
      name: "userInput",
      message: "Guess a letter!",
    }

  ]).then(function(runner) {

    // Check the users guess with the letter
   // -------------------------------------------------------------------------
    computersChoice = words[Math.floor(Math.random() * words.length)];
    letters = computersChoice.split("");
    dashes = letters.length;
    for (i = 0; i < dashes; i++) {
      showBlanks.push("_");
    }

    console.log(showBlanks);
  
  });
}

play();
