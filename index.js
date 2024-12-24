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



////////////////////////////////////////
// FUNCTION CLOSURE
////////////////////////////////////////
// The example below demonstrates the concept of closure in JavaScript using a father-child analogy.

// Imagine a father who owns possessions (money, house, car). 
// A child is "born" within the father function, meaning the child is defined inside the father. 
// This allows the child to access the father's possessions (just as in real life, 
// children can use their father's property however they wish).

// The child also has their own unique possession (knowledge), which they can combine with what the father owns. 
// However, the father cannot access the child’s property. For example, if the child is a software developer 
// and the father is a wealthy farmer, the father wouldn’t understand or access the programming 
// skills or technologies the child knows.

// As time passes, the father grows old, and his possessions are "handed over" to the child. 
// The father "passes away" (the function finishes execution), but the child continues to have access 
// to all the father's possessions through a "Will" (closure).

function father(money, house, car) {
  // The child is created inside the father and can use the father's possessions.
  function child(knowledge) {
    // Combining father's possessions with the child's possession.
    let ChildLife = money + ", " + house + ", " + car + ", " + knowledge;
    return ChildLife;
  }
  // Returning the child function directly as the "Will."
  return child;
}

// The father's possessions (parameters) are passed in while he is alive.
let Will = father("500k$", "2 Duplexes", "BMW 2024");
// The father has now "passed away" (the function has finished executing).
// The child continues to live and use the father's possessions along with their own.
let ChildLife = Will("4.85 CGPA");
console.log(ChildLife);
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
// REST PARAMETERS
// With rest parameters, I can take as many arguments as I want in a function.
// Let's enhance our car race analogy to make it more engaging:
// Imagine you hosted a car race competition. You want to reward the top three cars 
// (1st, 2nd, and 3rd positions) with specific prizes, while still keeping track of 
// all the other participants for reference.
// Using rest parameters, we can assign the top three positions to separate variables
// and store the remaining cars in a rest parameter called `otherParticipants`.

function carRace(firstPosition, secondPosition, thirdPosition, ...otherParticipants) {
    console.log(`🏆 The winner is car number ${firstPosition}! They get a gold medal.`);
    console.log(`🥈 Second place goes to car number ${secondPosition}! They get a silver medal.`);
    console.log(`🥉 Third place goes to car number ${thirdPosition}! They get a bronze medal.`);
    console.log(
        `🚗 Here are the other participants: ${otherParticipants.length > 0 ? otherParticipants.join(", ") : "None"}`
    );
}

// Testing the function
carRace(1, 2, 3, 4, 5, 6, 7, 8);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Function CLOSURE Example using an investment methodology
function investment(initialBalance) {
  let presentBalance = initialBalance;
  return {
    deposit: (amount) => presentBalance += amount,
    withdraw: (amount) => presentBalance -= amount,
    getmyBalance: () => presentBalance
  };
}

let account = investment(2000); // This saves how much you want to invest
console.log(account.withdraw(1040)); // The output or balance will be 960
console.log(account.deposit(10)); // The output or balance will be 970
