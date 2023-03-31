// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe('theThreesKnees', () => {
	it('should multiply each element by 3', () => {
		expect(theThreesKnees(numbersArray1)).toEqual([18, 21, 24, 27, 30])
		expect(theThreesKnees(numbersArray2)).toEqual([72, 81, 90, 99, 108])
	})
})

// b) Create the function that makes the test pass.

// Create a function that takes in an array of numbers
// declare and assign a new array to the map method of the given array of numbers
// return each element multiplied by three
// return the new array

/**
 * Multiply each element in an array by 3
 * @param {number[]} numArr - an array of numbers
 * @returns {number[]} array with each value multiplied by 3
 */
const theThreesKnees = (numArr) => {
	const results = numArr.map((value) => {
		return value * 3
	})

	return results
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe('divisibleByThree', () => {
	it('should determine if property number is divisible by 3', () => {
		expect(divisibleByThree(object1)).toEqual('15 is divisible by three')
		expect(divisibleByThree(object2)).toEqual('0 is divisible by three')
		expect(divisibleByThree(object3)).toEqual('-7 is not divisible by three')
	})
})

// b) Create the function that makes the test pass.

// create a function that accepts an object as an argument
// destructure number from object
// if number is divisible by 3 then return 'number is divisible by three'
// if number is not divisible by 3 then return 'number is not divisible by three'

const divisibleByThree = (numObj) => {
	const { number } = numObj
	if (number % 3 === 0) {
		return `${number} is divisible by three`
	} else {
		return `${number} is not divisible by three`
	}
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ['streetlamp', 'potato', 'teeth', 'conclusion', 'nephew']
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ['temperature', 'database', 'chopsticks', 'mango']
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe('capitalizeArray', () => {
	it('should capitalize first letters in each element of array', () => {
		expect(capitalizeArray(randomNouns1)).toEqual([
			'Streetlamp',
			'Potato',
			'Teeth',
			'Conclusion',
			'Nephew',
		])
		expect(capitalizeArray(randomNouns2)).toEqual([
			'Temperature',
			'Database',
			'Chopsticks',
			'Mango',
		])
	})
})

// b) Create the function that makes the test pass.

// create a function that accepts an array
// declare and assign a new array to the map of the given array
// iterate over each item in the array
// return the first letter capitalized and append the rest of the string
// return the new array

const capitalizeArray = (arr) => {
	const results = arr.map((value) => {
		return value.charAt(0).toUpperCase().concat(value.slice(1))
	})
	return results
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = 'learn'
// Expected output: 1
const vowelTester2 = 'academy'
// Expected output: 0
const vowelTester3 = 'challenges'
// Expected output: 2

describe('indexOfFirstVowel', () => {
	it('should return index of first vowel', () => {
		expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
		expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
		expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
	})
})

// b) Create the function that makes the test pass.

// create a function that takes a string as an argument
// create a constant array of vowels
// create a variable to store array of split string
// iterate over array
// check if value is a vowel
// once vowel is found use indexOf to get index of vowel

const indexOfFirstVowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u']

	const arr = str.split('')

	const firstVowel = arr.find((value, index) => vowels.includes(value))

	return arr.indexOf(firstVowel)
}
