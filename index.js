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

// The function below accepts three parameters: a, b, and c.
// It calculates the sum of these parameters and stores the result in a variable called `result`.
// The value of `result` is then returned using the `return` statement.

// Note:
// - Parameters are the placeholders (a, b, c) defined in the function declaration.
// - Arguments are the actual values passed to the function when it is called (e.g., 1, 2, 3).
// - When parentheses () are used after a function's name, the function is executed or called.

function helpMeDoSomeCalcs(a, b, c) {
  let result = a + b + c;
  return result;
}

// Calling the function with arguments 1, 2, and 3, and storing the returned value in `showMeEndResult`.
let showMeEndResult = helpMeDoSomeCalcs(1, 2, 3);
console.log(showMeEndResult); // Outputs: 6



