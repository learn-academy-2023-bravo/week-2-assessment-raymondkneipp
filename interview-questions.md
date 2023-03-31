# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:

A parameter is a placeholder used when defining a function. A function can take any number of parameters. Parameters allow you to perform logic on data that is supplied to a function. This allows you to repeat an action on different peices of data without duplicating logic.

Create a function called greet that takes a parameter called name:

```javascript
// parameter---- ↓
function greet1(name) {
	return `Hello ${name}`
}

// parameter---- ↓
const greet2 = (name) => {
	return `Hello ${name}`
}
```

An argument is used when invoking a function. An argument is the data that is being passed into the function.

Call the function greet with the argument of 'Raymond':

```javascript
// argument-↓
greet1('Raymond')

// argument-↓
greet2('Raymond')
```

Researched answer:

Parameters are variables that pertain only to the function they are defined in. Arguments are values passed to a function when the function is called. It is important to know the difference between the two because JavaScript will not throw an error if the number of parameters a function requires is different from the number of arguments a function is given when it is called. You can check how many arguments a function is given by getting the length of `arguments` inside of the function.

```javascript
function doSomething(a, b, c) {
	return arguments.length
}
console.log(doSomething(1, 2, 3)) // --> 3
```

`arguments` is implicitly passed into a function just like the `this` parameter.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:

The JavaScript built-in method .map() takes three predefined parameters. They are value, index, and array. Non of these parameters are actually required. Take the following block of code as an example.

```javascript
console.log([1, 2, 3].map(() => 'hello'))
// --> ['hello', 'hello', 'hello']
```

In this instance the map method returns a new array with three elements of the string 'hello'. This isn't really useful. With the value parameter, you can access the current element and perform logic to that value. In the majority of cases you want to provide the value parameter. The next parameter is the index. As the map method iterates over the array, index will be updated with the current index. The third and last parameter is the array. The value will be equal to the array at the current index.

```javascript
;['mom', 'mommy', 'ma', 'mama'].map(
	(value, index, array) => value === array[index]
)
```

This example will return an array of four elements all set to true.

Researched answer:

The map method takes a function as a parameter. This function is ran on every element in the array is it applied to and returns a new array with the results. The parameters of the function are currentValue, index, and array. currentValue contains the current element of the array. index holds the current index. array holds the value fo the array that the map method is applied to.

3. What is the difference between map and filter?

Your answer:

Both map and filter are array methods but have distinct differences. map iterates over an array and performs logic to each element of the array and returns an array with the results. Therefore the resulting array will be the same length as the array that the map method was applied to. Filter also iterates over an array but the resulting array will be the same except some elements may be missing. The logic inside the filter method determines if that element will be passed on to the new array. If true is returned then that element will make it to the resulting array but if false is returned instead, then that item is thrown out and will not be in the resulting array.

Researched answer:

The map() and filter() methods are two of the most commonly used array methods but they serve different purposes. The map() method creates a new array by applying a function to each element in an array. It iterates over each element and executes logic for each element. The length of the new array will always be the same as the original array. The filter() method creates a new array by filtering out elements from an array based on a condition. It iterates over each element one by one and checks if the element satisfies the condition. If the condition is true, the element is included in the new array. If the condition is false then the element will be exculded from the new array. The map() method transforms an array and filter() returns a subset of an array that satisfies a given condition.

1. What is iteration?

Your answer:

Iteration is the act of repeating a task a certain number of times. Iteration is commonly used with arrays. To iterate over an array simply means to execute some code for each element of the array. Loops are used to iterate. The for loop and while loop are two examples of loops. With a for loop you can tell the program what number you would like to start at, what number you want to end at, and how to want to increment the the starting value to get to the end value. A while loop will continuously run a block of code as long as a condition it true.

Researched answer:

Iteration refers to the process of repeatedly executing a set of instructions for a specified number of times or until a certain condition is met. There are several ways to perform iteration in JavaScript, including:

- for loop
- while loop
- do while loop
- for in loop
- for of loop
  Iteration is a powerful tool that allows developers to write efficient and effective code. Iterations can be used to process data, calculate algorithms, and build user interfaces.

1. What is the difference between a function and a method?

Your answer:

Functions and methods are very similar in nature being that they both perform some behaivor and both can accept arguments. The difference between the two is there they are defined and how they are invoked. Functions can be created anywhere in your script. Methods on the other hand are contained in an object. Methods act as a property in an object and therfore are executed using dot notation then the method name followed immediately by parentheses. Functions are called by simply typing the function name followed by parentheses. Methods are attatched to an object. They can not be called unless you call it from an instance of an object. A methods behavior only partains to the object it is defined in, whereas a functions behavior can reference any piece of code that it shares scope with.

Researched answer:

In programming, a function and a method are two related but distinct concepts. A function is a self-contained block of code that performs a specific action and can be invoked from any part of a program. It can take any number of inputs, called parameters, and can return a value. A function is not associated with any particular object or class.

A method is a function that is associated with an object or class. It can access and manipulate the object's data and can be called on an instance of that object.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

I am not positive what the term hoisting is in JavaScript.

Researched answer:

Hoisting in JavaScript is a behavior that occurs during the compilation of interpretation phase, where function and variable declarations are moved to the top of their respective scopes (global or local) reguardless of where they were originally declared. It is important to note that their declarations are hoisted but not their assignments and hoisting only applies to functions and variable declarations, not to function expressions or variable assignments using let or const.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:

A component is a self-contained piece of code that defines visual and functional elements of a user interface. Components are the building blocks in React. They are reusable and can be combines together to create complex UI's.

2. Spread operator:

The spread operator is represented by three dots (...) and is used to expand an iterable into individual elements. It allows easier ways to copy arrays or objects, combine multiple arrays or objects into a single one, and pass multiple arguments into a function. This is widely used in modern web development frameworks such as React and Vue.

3. React state:

State is an object that represents the current state of a component in React. It can be updated by the component. The state of a component can only be accessed and mutated by the component it was defined in. When the state of a component changes, the component will re-render and reflect the changes in the UI. This allows you to build dynamic and interactive UI's that respond to input from the user.

4. React props:

React props are properties that are passed from a parent component to a child component. Just like how a function can perform logic based on its parameters, props can change how the UI is rendered. You can pass any data type as props and access the data inside the component.

5. DOM events:

DOM events are actions that occur in a web page such as the user tapping on a button, hovering over an element, scrolling up or down a page, or submitting a form. DOM stands for Document Object Model. These events can be detected and handled by JavaScript. To handle DOM events you can use event listeners. An event listened is a function that executes when a specific event takes place.
