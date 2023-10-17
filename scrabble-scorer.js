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
let savedWord = "";

function initialPrompt() {
   savedWord = input.question("Let's play some scrabble!\n Enter a word:");
   
   return savedWord
};

function simpleScorer(word) {
 word = word.toUpperCase();
 simpleScorerArray = word.split('');
letterPoints = simpleScorerArray.length

return letterPoints;

};

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   vowelBonusScorerArray = word.split('');
   letterPoints = 0
      for(let i = 0; i < word.length; i++) {
      if(vowelBonusScorerArray[i] === 'A' ||
      vowelBonusScorerArray[i] === 'E' ||
      vowelBonusScorerArray[i] === 'I' ||
      vowelBonusScorerArray[i] === 'O' ||
      vowelBonusScorerArray[i] === 'U') {
         letterPoints +=3} 
       else {
         letterPoints +=1 }
      }
      return letterPoints
   };

function scrabbleScorer(word) {
   let letterPoints = 0;
   word = word.toLowerCase();
for(let i = 0; i < word.length; i++) {
letterPoints += newPointStructure[word[i]];
}
return letterPoints
};

const scoringAlgorithms = [
 {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
 },
 {
   name: 'Bonus Vowels',
   description: 'Vowels are 3pts, consonants are 1pt.',
   scorerFunction: vowelBonusScorer
 },
 {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: scrabbleScorer
 }

];

function scorerPrompt() {
   console.log(`Which scoring algorithm would you like to use?`);

   for(let i = 0; i < scoringAlgorithms.length; i++) {
   console.log(`${i} - ${scoringAlgorithms.name}: ${scoringAlgorithms[i].description}`)
}
scoreMethod = input.question(`\nEnter 0, 1, or 2: `); scoreMethod = Number(scoreMethod)
   console.log(`Score for '${savedWord}': \n\n${scoringAlgorithms[scoreMethod].scorerFunction(savedWord)}`)
}

function transform(oldPointStructure) {
let newPointSystem = {};
for(key in oldPointStructure) {
   for(let i = 0; i < oldPointStructure[key].length; i++) {
    let letterItem = oldPointStructure[key][i];
    letterItem = letterItem.toLowerCase();
      newPointSystem[`${letterItem}`] = Number(key);
   };

};

return newPointSystem;
};


let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] = 0


function runProgram() {
 initialPrompt();
 scorerPrompt(); 
// console.log(transform(oldPointStructure))
};

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
