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
