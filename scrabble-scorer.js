// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let inputWord;
let numWord;

let newPointStructure={};

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

 function scrabbleScorer(word,newPointStructure) {
	word = word.toLowerCase();
   console.log(word);
   console.log(newPointStructure);
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
	  letterPoints += Number(newPointStructure[word[i]]);
		
	}
   console.log(letterPoints);
	return letterPoints;
 }

 // your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   inputWord = input.question("Enter a word to score: ");
   console.log(oldScrabbleScorer(inputWord));
};

let simpleScorer1;

simpleScorer1 = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']
 };

 function simpleScorer(word)
 {
   let letterPoints=0;
   word = word.toLowerCase();
   let newSimpleScorer = transform(simpleScorer1);
   for (let i = 0; i < word.length; i++) {
      letterPoints += Number(newSimpleScorer[word[i]]);
       
    }
    return letterPoints
 }

let vowelBonusScorer1;

vowelBonusScorer1 = {
   1: ['L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']
 };

 function vowelBonusScorer(word)
 {
   let letterPoints=0;
   word = word.toLowerCase();
   let newVowelBonusScorer = transform(vowelBonusScorer1);
   for (let i = 0; i < word.length; i++) {
      letterPoints += Number(newVowelBonusScorer[word[i]]);
    }
    return letterPoints;
 }

//let scrabbleScorer;

function scoringFunction(word) {
	word = word.toLowerCase();
	let letterPoints=0;
   if(numWord == 0)
   {
      letterPoints = simpleScorer(word);
   }
   else if(numWord == 1)
   {
      letterPoints = vowelBonusScorer(word);  
   }
	return letterPoints;
 }

let simpleScore = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: function(word){return simpleScorer(word)}
 };

 let bonusVowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: function(word){return vowelBonusScorer(word)}
 };

 let scrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: function(word){return scrabbleScorer(word,newPointStructure)}
 };

const scoringAlgorithms = [simpleScore, bonusVowels, scrabble];



function scorerPrompt() {
   
   const input = require("readline-sync");
   console.log(`Which scoring algorithm would you like to use?\n\n`);

   console.log(`0 - Simple: One point per character`); 
   console.log(`1 - Vowel Bonus: Vowels are worth 3 points`);
   console.log(`2 - Scrabble: Uses scrabble point system`);
   
   numWord = input.question("Enter 0, 1, or 2: ");
   if(numWord==0)
   {
   console.log("algorithm name: ", scoringAlgorithms[0].name);
   console.log("scoringFunction result: ", scoringAlgorithms[0].scorerFunction(inputWord));
   }
   else if(numWord==1)
   {
   console.log("algorithm name: ", scoringAlgorithms[1].name);
   console.log("scoringFunction result: ", scoringAlgorithms[1].scorerFunction(inputWord));
   }
   else if(numWord==2)
   {
   console.log("algorithm name: ", scoringAlgorithms[2].name);
   console.log("scoringFunction result: ", scoringAlgorithms[2].scorerFunction(inputWord)); 
   }
}

function transform(oPointStructure) 
{
   let pointName;
   let nPointStructure={};
   let pointValue;
   for (pointValue in oPointStructure) {
 
      for(i=0;i<oPointStructure[pointValue].length;i++)
      {
          pointName = oPointStructure[pointValue][i].toLowerCase();
          nPointStructure[pointName]=Number(pointValue);
      }

    }
    return nPointStructure;
};

newPointStructure = transform(oldPointStructure);

function runProgram() {
   
   initialPrompt();
   scorerPrompt();
}

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
