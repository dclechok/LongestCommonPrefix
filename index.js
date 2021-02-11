/**
 * @param {string[]} strs
 * @return {string}
 */

let wordArray = ["friend", "bug", "big", "slob", "sloth"];
let wordWithPrefix = [];
let longestPrefix = '';
let buildingPrefix = '';

function longestCommonPrefix(wordArray){
    console.log(wordArray);
		//fill a new array with strings that are split into characters
		for(let c = 0; c <= wordArray.length - 1; c++){
			wordWithPrefix.push(wordArray[c]);
			wordWithPrefix[c] = wordWithPrefix[c].split('');
		}
	
		let word = 0; //word Index
		let letter = 0; //char Index
	
		while(wordWithPrefix.length > 1){ //while the array has more than one word
			for(let c = 1; c <= wordWithPrefix.length - 1; c++){ //c is the rest of the words we iterate through in the array
				while(wordWithPrefix[word][letter] === wordWithPrefix[word + c][letter]){
					buildingPrefix += wordWithPrefix[word][letter]; //add letters that match to prefix var
					letter += 1; //check next letters in matching prefixes
				}
				
				letter = 0;
				//now check same word with next word
				if(buildingPrefix.length > longestPrefix.length){
					longestPrefix = buildingPrefix;
				}
				buildingPrefix = 0; //reset buildingPrefix
			}
			wordWithPrefix = wordWithPrefix.slice(1); //move on from first word
		}
		console.log(longestPrefix.replace(0, ''));
}

longestCommonPrefix(wordArray);