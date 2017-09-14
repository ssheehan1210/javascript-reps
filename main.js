// Round 1

// Write a function lengths that accepts a single parameter as an argument,
// namely an array of strings. The function should return an array of numbers.
// Each number in the array should be the length of the corresponding string.

const lengths = (arrayOfStrings) => {
	const arrayOfNumbers = [];
	for (i = 0; i < arrayOfStrings.length; i++){
		arrayOfNumbers.push(arrayOfStrings[i].length);
	};
	return arrayOfNumbers;
};
lengths(["sam", "jack", "cathy"]);


// Round 2

// Write a Javascript function called transmogrifier This function should accept
// three arguments, which you can assume will be numbers. Your function should
// return the "transmogrified" result.
// The transmogrified result of three numbers is the product (numbers multiplied
// together) of the first two numbers, raised to the power (exponentially) of
// the third number.

const transmogrifier = (firstNumber, secondNumber, thirdNumber) => {
	const originalTwoNumbers = firstNumber * secondNumber;
	let transmogNumber = originalTwoNumbers;
	for (i = 1; i <= thirdNumber; i++){
		transmogNumber = transmogNumber * originalTwoNumbers;
	}
	return transmogNumber;
};
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);


// Round 3

// Write a function called toonify that takes two parameters, accent and sentence.
	// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
	// If the accent is "elmer", replace all "r" with "w".
	// Feel free to add your own accents as well!
	// If the accent is not recognized, just return the sentence as-is.

const toonify = (accent, sentence) => {
	let sentenceArray = [];
	let newSentence = "";
	if (accent === "daffy"){
		sentenceArray = sentence.split('');
		for (i = 0; i < sentenceArray.length; i++){
			if (sentenceArray[i] === "s"){
				sentenceArray[i] = "th";
			}
		};
		for (x = 0; x < sentenceArray.length; x++){
			newSentence = newSentence + sentenceArray[x];
		};
		console.log(newSentence);
	} else if (accent === "elmer"){
		sentenceArray = sentence.split('');
		for (i = 0; i < sentenceArray.length; i++){
			if (sentenceArray[i] === "r"){
				sentenceArray[i] = "w";
			}
		};
		for (x = 0; x < sentenceArray.length; x++){
			newSentence = newSentence + sentenceArray[x];
		};
		console.log(newSentence);
	} else {
		console.log(sentence);
	}
};
toonify("daffy", "so you smell like sausage");


// Round 4

// Write a function wordReverse that accepts a single argument, a string. The method should
// return a string with the order of the words reversed. Don't worry about punctuation.
// You'll need to use String.split() to create an array of words splitting them with a space or " ".
// Then you'll need to reverse the order of that array using array.reverse(). Finally, you'll loop
// through them to create a new string.

const wordReverse = (string) => {
	let newString = "";
	let stringArray = string.split(' ');
	let reversedStringArray = stringArray.reverse();
	for (i = 0; i < reversedStringArray.length; i++){
		if (i > 0){
			newString = newString + " ";
		}
		newString = newString + reversedStringArray[i];
	};
	return newString;
};
wordReverse("Now I know what a TV dinner feels like");
