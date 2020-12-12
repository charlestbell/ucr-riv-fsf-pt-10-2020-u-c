/**
 * * STORE INFORMATION
 */

// Variables store pieces of information

// Store single pieces of information
var name = 'Ryan'; //string
var addressNumber = 1549; //number
var isLivingInCalifornia = true; //boolean

// Store multiple pieces of information

// Arrays store lists of things
var listOfNames = ['Ryan', 'Garth', 'Avelica', 'Tyler'];
var listOfNumbers = [34, 65, 12, 45];

// Grab a index of an array
listOfNumbers[3];

// Set the index of an array
listOfNames[2] = 'Bob';

// Objects store collections of information
var myCar = {
  make: 'Volvo',
  year: 2013,
  miles: 85000,
  // They can also store functions. A function
  // that lives on an object is called a "method"
  increaseYear: function () {
    // In this case, the "this" keyword will
    // point to the object myCar
    this.year = this.year + 1;
  },
};

// To grab a property on an object
myCar.make;

// Assign a property on an object
myCar.make = 'Toyota';

// To call a method on an object
myCar.increaseYear();

// We can also make an array that is a list of objects
// This is a great way to store lots of information
var listofCars = [
  {
    make: 'Volvo',
    year: 2013,
    miles: 85000,
  },
  {
    make: 'Honda',
    year: 2019,
    miles: 3000,
  },
];

/**
 * * CONTROL YOUR CODE
 */

// JavaScript executes code line by line from top to bottom.
// But we have some control over how our code is executed
// using conditional statements, loops and functions

// CONDITIONAL STATEMENTS
// If something is true...
if (name === 'Ryan') {
  // run this code
} else {
  // otherwise, run this code
}

// For LOOPS: Run code over and over again
// Specify how many times the code loops in the ()
// The loop below will run 15 times
for (let index = 0; index < 15; index++) {
  // It runs this code
}

// A very common thing to do with for loops, is iterate over an array
// Iterate means go to every index of the array and do something
for (let index = 0; index < listOfNames.length; index++) {
  var name = listOfNames[index];

  // Inside the {}, the variable name will be set to each index of the array
}

// FUNCTIONS: run code at specific times. The code will not be executed
// when the function is declared. It will only run when the function is called.

// Two ways to declare a function:
function addTwoNumbers(number1, number2) {
  // Functions can return values to be stored in a variable
  return number1 + number2;
}

var addTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

// Call a function by putting () after its name. Additionally,
// you can send the function arguments when you call it that
// will become usable variables inside the function
// (2 and 4 become number1 and number2, in this case).
// The variable sumOfTwoNumbers holds the return value from the function.
var sumOfTwoNumbers = addTwoNumbers(2, 4);

/**
 * * CHANGE THE DOCUMENT OBJECT MODEL (CHANGE WHAT YOU SEE ON THE PAGE) WITH JS
 */

// To add an HTML element to the page, you usually go through four steps:

// 1) Select something that already exists in the HTML and store it in a var --
// document.querySelector allows you to use CSS selectors to grab something
// from HTML
var textContainer = document.querySelector('#text-container');

// 2) Create the new element and store it in a var (...but this does not add it to the page)
var newH3ThatIAdded = document.createElement('h3');

// 3) Modify the new element somehow -- in this case, we're adding text
newH3ThatIAdded.textContent = 'This was added in JavaScript';

// You could also add or remove a class for styling
newH3ThatIAdded.classList.add('green-text');

// 4) Add the new element to the page
textContainer.append(newH3ThatIAdded);

// An very common thing to do in JavaScript is take a list of things (in an array) and
// use a for loop to create an new element for each thing in the list. For example:

var listOfAnimals = ['Cat', 'Dog', 'Alpaca', 'Hedgehog'];

for (let i = 0; i < listOfAnimals.length; i++) {
  // Each time through the loop, set a var to hold the current animal...
  var animal = listOfAnimals[i];

  // ...Create the element
  var animalHeading = document.createElement('h4');

  // ... Add the text
  animalHeading.textContent = animal;

  // Add it to the page (remember, we assigned textContainer on line 122)
  textContainer.append(animalHeading);
}

/**
 * * CALL THIRD-PARTY APIs with jQuery
 */

// Use AJAX to call a third-party API -- request some information from a server

// THIS RELIES ON JQUERY...and the version of jQuery that Bootstrap includes
// does not include AJAX. Google 'jQuery CDN' to get a link to the full version of jQuery.
$.ajax({
  url: '<SOME URL TO CALL>',
  method: 'GET',
  error: function (error) {
    // This function runs if the request is not successful
  },
}).then(function (response) {
  // Code that runs AFTER the API has responded and the request was successful

  // The response will be available as an argument on this function
  console.log(response);
});
