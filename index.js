// The functions below perform specific actions but do not return any value.
// In JavaScript, a function without a `return` statement implicitly returns `undefined`.
// Despite this, such functions can still be useful for tasks like logging information
// to the console (as shown in the example) or modifying the HTML DOM.
//
// Example:
// - `showSomething` logs a message to the console.
// - `negShowSomething` logs a different message to the console.
function showSomething() {
  console.log("show this on console");
}
function negShowSomething() {
  console.log("don't show anything");
}
showSomething();
negShowSomething();

// FUNCTION WITH A RETURN STATEMENT
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// The function below accepts three parameters: a, b, and c.
// It calculates the sum of these parameters and stores the result in a variable called `result`.
// The value of `result` is then returned using the `return` statement.

// Note:
// - Parameters are the placeholders (a, b, c) defined in the function declaration.
// - Arguments are the actual values passed to the function when it is called (e.g., 1, 2, 3).
// - When parentheses () are used after a function's name, the function is executed or called.

// function helpMeDoSomeCalcs(a, b, c) {
//   let result = a + b + c;
//   return result;
// }

// // Calling the function with arguments 1, 2, and 3, and storing the returned value in `showMeEndResult`.
// let showMeEndResult = helpMeDoSomeCalcs(1, 2, 3);
// console.log(showMeEndResult); // Outputs: 6

// DEFAULT PARAMETERS
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

// The code below demonstrates how default parameters work.
// In JavaScript, you can assign a default value to a parameter during the function's declaration.
// If no argument is passed for a parameter, the default value is used instead.

// This helps prevent errors like `NaN` (Not a Number), which can occur when
// operations involve `undefined` parameters.

// function calculateResult(a = 1, b = 1, c = 1, d = 0) {
//   // `a`, `b`, `c`, and `d` have default values assigned in case no arguments are passed.
//   let output = 2 * (a + b * c + d);
//   return output;
// }

// // Calling the function with some arguments missing
// let result = calculateResult(1, 2, 2); // `d` will use its default value of 0
// console.log(result); // Output: 10

//REST PARAMETERS
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// function food(tea = 1, ...biscuits) {
//   let breakfast =biscuits;
//   return breakfast;
// }
// let showMeMyFood = food(1, "2 cabins", "2 digestives", "3 chic choke");
// console.log(showMeMyFood);



// NESTED FUNCTIONS
/////////////////////////////////////
// Nested functions are functions inside another function. 
// Think of it like a parent-child relationship: 
// The outer function is the parent, and the inner function is the child. 

// Example:

function parent() {
  let parentName = "John";  // The parent function can have variables
  
  function child() {
    // The child function has access to the parent function's variables
    console.log(`The parent is ${parentName}, and I am the child.`);
  }
  
  // Calling the child function inside the parent
  child();  // This will output: "The parent is John, and I am the child."
}

// Calling the parent function
parent();
