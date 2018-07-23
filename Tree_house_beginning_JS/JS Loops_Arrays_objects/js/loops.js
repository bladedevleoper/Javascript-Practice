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
    while (guess !== randomNumber) {

        guess = getRandomNumber(upper);
        attempts++;

    }

    document.write("</p>The random number was: " + randomNumber + "</p>");
    document.write("</p>It took the computer: " + attempts + " attempts to get it right.</p>");