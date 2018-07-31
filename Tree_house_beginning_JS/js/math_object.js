//JS is made up of lots of different objects.


/*

The maths object consists of mathematical constants and functions.

objectname.methodname();
*/

//Creating a random number

// var random = Math.floor(Math.random() * 6) + 1;


// document.write(random);

//prompt();
//parseInt();

var number2 = prompt("Please provide a number");
var convertString2 = parseInt(number2);
var number1 = prompt('Please provide a number');

var convertString = parseInt(number1);

var randomNumber = Math.floor(Math.random() * (convertString - convertString2 + 1)) + convertString2;

document.write('Your number is ' + randomNumber + ' which is between 1 and ' + convertString );






