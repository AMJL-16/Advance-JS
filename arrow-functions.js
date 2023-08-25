/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */
// Curly braces required or not 
/* in a single line expresion no curly braces.
returning multiline use parentheses and no curly braces but you can 
add curly braces in those parentheses like when returning 
an object literal for example
const makePoint = (x, y) => ({ x: x, y: y });
also in case of using an arrow func as a placeholder like that
 const doNothing = () => {};  */


// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
  // Code block
  return a + b;
}
let sum = addTwoNumbers(4,8);
console.log(sum);
console.log(addTwoNumbers(5,6));

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
  return a + b;
}
let sum1 = addTwoNumbers1(4,2); 
console.log(sum1)

// Single Line Arrow Function With Parameters
// let's make this code cleaner and shorter
const addTwoNumbers2 = (a, b) => a + b;
// const addTwoNumbers2 = (a, b) => (a + b); also valid
let sum2 = addTwoNumbers2(2,8);
console.log(sum2);

// Implicit Returns like single parameter
const saySomething = () => console.log('Bonjour, un petit cafe pour commencer?');
saySomething(); // function with no paremeter at all 

// or like that 
const orderFood = order => console.log(order);// with parameter
orderFood('The 3 course menu for me, please.');

// Returning Multiple Lines
/*Whenever an arrow function needs to return multiple lines
 of code, such as this one which returns a multi-line string,
the parentheses mentioned in the implicit return function above
are required.*/

const returnMultipleLines = () => (
  `<p>
  This is a multiline string!
  </p>`
)
console.log(returnMultipleLines());
