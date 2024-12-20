function showSomething() {
  console.log("show this on console");
}
function negShowSomething() {
  console.log("don't show anything");
}
showSomething();
negShowSomething();
// The functions below perform specific actions but do not return any value.
// In JavaScript, a function without a `return` statement implicitly returns `undefined`.
// Despite this, such functions can still be useful for tasks like logging information
// to the console (as shown in the example) or modifying the HTML DOM.
//
// Example:
// - `showSomething` logs a message to the console.
// - `negShowSomething` logs a different message to the console.

