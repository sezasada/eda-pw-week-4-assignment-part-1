console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  console.log('Hello,', name);
}
// Remember to call the function to test
helloName('Seb');
// Function returns 'Seb' as the name. 
const answer = 0;
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber ) {
  console.log(firstNumber);
  return answer;
  // return firstNumber + secondNumber;
}
addNumbers(2 +2);

// 4. Function to multiply three numbers & return the result
function multiplyThree( multiply ){
  console.log(multiply);
  return answer;
}
multiplyThree( 3 * 3 * 3 );



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(1) );
console.log( 'isPositive - should say false', isPositive(-3) );
// Any positive numbers will return true, any negative numbers will return false. 

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let a = ['seb', 'g', 6];
let r = [];
let w = [ 'does', 'this', 'work' ];
const v = 0;
function getLast( array ) {
  if (v <= array.length) {
    return array[array.length -1];
  }
  else {
    return 'undefined';
  }
}
console.log(getLast(a));
console.log(getLast(r));
console.log(getLast(w));
 
// Only the last item in the array wil be logged to the console. 

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let j = [10, 2, 3 ];
function find(value, array) {
  for( let x = 0; x < array.length; x++) {
    if( value == array[x]) {
      console.log(value);
      // Not sure if we are supposed to log the value as well. I can delete the console.log if needed. 
      return true;
    }
  }
  return false;
}
console.log(find(10, j));
console.log(find(3, j));
console.log(find(2, j));
console.log(find(25, j));
console.log(find('seven', j));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
