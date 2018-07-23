/* Notes
Some further learning with interactive web pages with JS
http://teamtreehouse.com/library/interactive-web-pages-with-javascript

*/

//Javascript is sometimes called a functional programming language.
//functions are at the heart of JS.

//Create a random function
//it's common for programmers to put functions at the top of a file.
// function alertRandom(){
//     var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     alert(randomNumber);
// }



// alertRandom();

/* 

    How to use function expressions

*/

//Another way that you can use functions is assign them to a variable. Which this is known as a function expression
//As this function does not have a name, it is an anonymous function
// var alertRandom = function (){
//     var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     alert(randomNumber);
// };

// alertRandom();



/*
    Functions change the flow of a program
    - getting information from a function

*/


//This function runs the random number and simply returns an outcome
// function getRandomNumber(){
//     var randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber;
// }

//The below function will check to see if an input box ia empty or not empty

// function isEmailEmpty(){
//     var field = document.getElementById('email');
// //this checks to see if the email field (id attribute) is empty
//     if(field.value === ''){
//         return true;

//     } else {
//         return false;
//     }

// }

// //this is used to hold the return value from the function
// var fieldTest = isEmailEmpty();
// if(fieldTest === true){

//     alert("Please enter your email address");

// }


/*--------------------------------------------------------- */


// Using parameters and arguments within JS

function getRandomNumber( upper ){
        var randomNumber = Math.floor( Math.random() * upper ) + 1;
        return randomNumber;
}

// console.log( getRandomNumber(6) );

//function using two parameters
function getArea(width, length, unit){
var area = width * length;
return area + ' ' + unit ;
}

//function passing two arguements
console.log( getArea(100,2, 'sq ft') );


/*------------------------------------------ */

// variable scope
// variables that are declared inside the function is applicable to that function
// this is classed as variable scope
//it is a bad idea to access global scopes in your funtions.
/*------------------------------------------ */

//this will change the passed in arguement, the function will spit out Sarah

var person = 'John';


function callMyName(){

    person = 'Sarah';

    return person;
}

console.log( callMyName(person) );

var person2 = 'Jimmy';

function callMyOtherName(person){

    var person2 = '';

    return person2;
}

console.log( callMyOtherName(person2) );