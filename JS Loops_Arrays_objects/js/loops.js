/*

    Javascript Loops

*/


//While Loop

//While loop starts with a true condition, it will then run over and over again until the conditon is false

// function getRandomNumber(upper){
// return Math.floor( Math.random() * upper) +1;
// }

// var counter = 0;

// while (counter <= 10) {
// var randNum = randomNumber(6);
// document.write(randNum + ' ');
//     counter++;
// }



/* -------------------------------------*/

/*----- computer guess game -------------*/


var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;


function getRandomNumber(upper){
    return Math.floor( Math.random() * upper) +1;
    }
//the loop does not have to use a counter to limit the amount of times the loop has to run
//it can be any condition.
//the while loop, 1. the condition is evaluated before the loop. if the condition is not true at the beginning, then the loop will never run.
// 2nd you will always need a way to break out of the loop. Such as create a variable that tests the condition that will break the loop and for it to exit.
    // while (guess !== randomNumber) {

    //     guess = getRandomNumber(upper);
    //     attempts++;

    // }

    // document.write("</p>The random number was: " + randomNumber + "</p>");
    // document.write("</p>It took the computer: " + attempts + " attempts to get it right.</p>");

/* Do While Loops */

//Syntax
//It is closely related to the while loop.
//The do while loop will always execute the code block atleast once before it checks the condition.
/* 

do {

} while () 

*/

//Uses of the do while loop is asking the user for an input such as an email address, if the wrong email address has been entered then it will repeat until an emall number is entered.


//Do While game.

var random = getMyNumber(10);
var myGuess;
var guessCount = 0;
var correctGuess = false; //this is called a flag and is used to test a certain state of a                               condition.
var wall = Array(); //create a wall of fame

function getMyNumber( upper ){
    var num = Math.floor(Math.random() * upper) + 1;
    return num;
}

do{

    myGuess = prompt('I am thinking of a number between 1 and 10. What is it?');
    guessCount += 1;
    console.log(random);
    //check to see if the answer is correct
    if (parseInt(myGuess) === random){
        correctGuess = true;

    }
//this will test if correct guess is not true
} while ( !correctGuess )


document.write('<h1>You guess the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + random); 