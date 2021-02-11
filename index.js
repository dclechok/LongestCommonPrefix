/**
 * @param {string[]} strs
 * @return {string}
 */

let wordArray = ["friend", "bug", "big", "slob", "sloth"];
let wordWithPrefix = [];
let longestPrefix = '';

function longestCommonPrefix(wordArray){
    console.log(wordArray);
		//fill a new array with strings that are split into characters
		for(let c = 0; c <= wordArray.length - 1; c++){
			wordWithPrefix.push(wordArray[c]);
			wordWithPrefix[c] = wordWithPrefix[c].split('');
		}
	
		let word = 0; //word Index
		let letter = 0; //char Index
		let wordIncrementer = 1; //next word to compare to
	
		while(wordWithPrefix.length > 1){
			if(wordWithPrefix[word][letter] === wordWithPrefix[word + wordIncrementer][letter]){
				longestPrefix += wordWithPrefix[word][letter]; //add letters that match to prefix
				letter += 1;
			}
			wordWithPrefix = wordWithPrefix.slice(1); //move on from first word
		}


}

longestCommonPrefix(wordArray);


			// //any words match
			// for(var d = 0; d <= wordWithPrefix.length - 1; d++){
			// 	//any chars match
			// 	if(wordWithPrefix[x][d] === wordWithPrefix[x + 1][d]){
			// 		console.log('letters match');
			// 		longestPrefix += wordWithPrefix[x][d];
			// 		if(wordWithPrefix[x][d + 1] === wordWithPrefix[x + 1][d + 1]){
			// 			longestPrefix += wordWithPrefix[x][d + 1];
			// 		}
			// 	} //check on follow word in array
			// console.log(longestPrefix);
			// }