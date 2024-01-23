// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!");
 
   // Prompt the user to enter a word
   let wordToScore = input.question("Enter a word to score: ");
 
   // Score the word using oldScrabbleScorer function
   let scoreResult = oldScrabbleScorer(wordToScore);
 
   // Print the result to the console
   console.log(scoreResult);
 }
 
 // Example usage
 initialPrompt();
 

 function simpleScorer(word) {
   return word.length;
 }
 
 // Define the vowelBonusScorer function
 function vowelBonusScorer(word) {
   let totalPoints = 0;
 
   for (let i = 0; i < word.length; i++) {
     if ('aeiouAEIOU'.includes(word[i])) {
       totalPoints += 3;
     } else {
       totalPoints += 1;
     }
   }
 
   return totalPoints;
 }
 
 // Complete the scoringAlgorithms array
 const scoringAlgorithms = [
   { name: "Simple Score", description: "Each letter is worth 1 point", scoringFunction: simpleScorer },
   { name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt", scoringFunction: vowelBonusScorer },
   { name: "Scrabble", description: "The traditional scoring algorithm", scoringFunction: oldScrabbleScorer }
 ];
 
 // Complete the scorerPrompt function
 function scorerPrompt() {
   console.log("Which scoring algorithm would you like to use?");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
     console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   }
 
   let choice = input.question("Enter 0, 1, or 2: ");
   return scoringAlgorithms[choice];
 }
 
// Existing code...

// Modify runProgram to include scorerPrompt and use the selected scoring algorithm
function runProgram() {
   initialPrompt();
   let wordToScore = input.question("Enter a word to score: ");
   let selectedAlgorithm = scorerPrompt();
   let scoreResult = selectedAlgorithm.scoringFunction(wordToScore);
 
   console.log(`Score for '${wordToScore}': ${scoreResult}`);
 }
 
 // Run the program
 runProgram();

 
 


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
