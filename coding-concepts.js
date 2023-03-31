// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = 'Bravo 2023'
// console.log(cohort.split(''))

// a) Your answer: ['B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '3']
// b) Verify and explain: ['B', 'r', 'a', 'v', 'o', ' ', '2', '0', '2', '3'] When an empty string is passed to the method split, it will turn the string into an array with each character being its own element in the array.

// --------------------2) What will this log?

const greeter = (name) => {
	;`Hello, ${name}!`
}
// console.log(greeter('LEARN Student'))

// a) Your answer: undefined
// b) Verify and explain: Since there is no return statement in the function, undefined will be returned.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The variable is assigned to an array with the .map method. This method will return a new array. Inside the map, it is iterating over the array and multipling each element by two.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The filter function will only return elements that return a truthy value. If the remainder of a number is not equal to 0, then that number will be returned from filter.

// --------------------5) What will this log?

const myCodingSkills = {
	languages: ['JavaScript', 'Ruby'],
	frameworks: ['React', 'Ruby on Rails'],
	databases: 'PostgreSQL',
	versionControl: 'GitHub',
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: myCodingSkills is an object so to access a specific item you would use dot notation. `.languages` will return the array ['JavaScript', 'Ruby']. `[0]` will grab the first item in the array.

// --------------------STRETCH: What will this log?

class Learn {
	constructor(name) {
		this.student = name
		this.cohort = 'Bravo'
		this.year = 2023
	}
}
const learnStudent = new Learn('George')
// console.log(learnStudent)

// a) Your answer: An object will be printed out. { student: 'George', cohort: 'Bravo', year: 2023 }
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2023 } Classes are blueprints for objects. The class contains three properties, student, cohort, and year. When creating a new instance of Learn, you pass in a name which is assigned to the property student.
