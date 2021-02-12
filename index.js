/**
 * @param {string[]} strs
 * @return {string}
 */

let wordArray = ["flower", "flow", "flight"];
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
				//holds the longest prefix...needs to hold the most COMMON prefix
				// if(buildingPrefix.length > longestPrefix.length){
				// 	longestPrefix = buildingPrefix;
				// 	console.log(longestPrefix + 'TEST');
				// }
				// buildingPrefix = ''; //reset buildingPrefix
				console.log(buildingPrefix);
			}
			wordWithPrefix = wordWithPrefix.slice(1); //move on from first word
		}

}

longestCommonPrefix(wordArray);