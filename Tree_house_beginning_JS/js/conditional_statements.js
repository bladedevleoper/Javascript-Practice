//Conditional Statements

// var answer = prompt('What programming language is the name of a gem?');
// if ( answer.toUpperCase() === 'RUBY') {
//     document.write("<p>That is right!</p>");
// } else {
//     document.write("That is wrong, please try again");
// }


/* Comparrison Operators */

//Buiding a random number guessing game


var correctGuess = false;
//Formula for generating a random number
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt('I\'m thinking of a number between 1 and 6. What is it ?');

//prompts pass a number as a string, we use parseInt to convert it into a number
if (parseInt(guess) === randomNumber ) {

    // document.write('<p>You guessed the number!</p>' + randomNumber);
    correctGuess = true;

} else if ( parseInt(guess) < randomNumber){

    var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);

    if( parseInt(guessMore) === randomNumber){
        correctGuess = true;
    }

} else if (parseInt(guess) > randomNumber) {
    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
    if (parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
}

if( correctGuess ){
    document.write('<p>You guessed the number!</p>' + randomNumber);
} else {
    document.write('<p>Wrong number! Guess again, your number was ' + randomNumber + '</p>');
}