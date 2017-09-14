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
