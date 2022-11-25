// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We created a variable called 'name' and assign it to 'Dane'. name is set to 'Dane'.
// we created a conditional stating  if 'name' is of equal value and type as 'Mary'. name is being compared to 'Mary'.
// we console.log ('Hi, Mary!'). 
// or else, we console.log('How do you do?).

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we declared a variable called secret. secret is now a variable.
// we assigned 'code' the value of the numbers 1,2, and 3. code is set to 123.
// Here, were writing a conditional stating if 'code' and the numbers 123
// are equal in value and type. code is being compared to 123.
// Secret is assigned value of 'super'. secret got set to 'super'
// code is assigned to the value of 'code' which we previously gave the value of the numbers 123, multiplied by the number 2.
//another conditional stating if code is greater than or equal to 250. code is now set to code multiple by 2.
// we assigned the variable 'secret' the value of 'duper'. Secret is set to 'duper'.
// we console.log(secret)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we assigned 'isStudent' the value of true. isStudent is true.
// we set the variable "age" to the value of the number 34. Age is 34
// we set 'zip' value to the number 55407. zip is 55407
// here, were created an if else if else conditional starting off with
// if the conditional 'isStudent' is equal in type and value as
// 'true', and 'zip' is greater than the number 80000. is IsStudent same as true and is zip greater than 80000
//we console.log('You're a student on the West Coast!').
// here, we are stating if  the value of 'isStudent' equal to the same type
// as 'false' or age is less than 30. is isStudent same has false or is age less than 30.
// we than console.log('What are your hobbies?').
//we created another else stating if 'isStudent is equal in type and value
// as 'true' is isStudent same has true.
// than console.log('Welcome to Prime!').
//our last else statement is console.log('How about the weather?').

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

* 

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX-- instructions asked to set colorOne to blue but its set to red and vice versa.
// it should be colorOne = 'blue'; colorTwo = 'blue';
// colorTwo needs to be set to purple.
// colorTwo = 'purple'; 

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.

// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//-- FIX "||" translates to "or". solution: replace the "||" with "&&". if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
//
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX-- instructions asked to check if age is greater than or equal to miniAge. it should be (Age >= miniAge).
2nd FIX-- instructions stated to console.log "enter" first but its the second console log being ran. console.Log('enter');
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
