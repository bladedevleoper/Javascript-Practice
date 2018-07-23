// Ask at least five questions

//Score
let score = 0;
let correctAnswer = 0;
//Answers
var answer1 = "Cardiff";
var answer2 = 4;
var answer3 = 'Blue';
var answer4 = 'Yes';
var answer5 = 7;


//Questions
var question1 = prompt('What is a the capital of Wales in the UK?');
if (question1 === answer1){
    score += 1;
    correctAnswer += 1;
} 
var question2 = parseInt(prompt('What is 2 + 2?'));
if (question2 === answer2){
    score += 1;
    correctAnswer += 1;
} 
var question3 = prompt('What is the colour of the sky?');
if (question3 === answer3){
    score += 1;
    correctAnswer += 1;
}
var question4 = prompt('Is a lion a cat');
if (question4 === answer4){
    score += 1;
    correctAnswer +=1 ;
}
var question5 = parseInt(prompt('How many colours does the rainbow have?'));
if (question5 === answer5){
    score += 1;
    correctAnswer += 1;
}


// Keep track of the number of questions the user answered correctly



// Provide a final message after the quiz letting the user know the number of questions he or she got right.

alert('Your final score was: ' + score + ' You answered ' + correctAnswer + ' questions out of 5');

// Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

//Condition to check the score outcome and award the player
if(score === 5){
    alert('You have been awarded the gold crown');
} else if(score >= 3){
    alert('You have been awarded the silver crown');
} else if (score >= 1) {
    alert('You have been awrded the bronze crown');
} else{
    alert('Game Over: Please try again');
}


//print answers to the screen and Scores:
document.write('<p>---------------Your Score--------------------</p></br>');
document.write('<p>Your Score:' + score + '</p></br>');
document.write('<p>Correct Answers: ' + correctAnswer + '</p></br>');
document.write('<p>---------------- Your Answers --------------------</p></br>');
//question 1
document.write('Question 1 answer was ' + question1 + '</br>');
//question 2
document.write('Question 2 answer was ' + question2 + '</br>');
//question 3
document.write('Question 3 answer was' + question3 + '</br>');
//question 4
document.write('Question 4 answer was ' + question4 + '</br>');
//question 5
document.write('Question 5 answer was ' + question5 + '</br>');

document.write('<p>---------------- Answers --------------------</p></br>');
//question 1
document.write('Question 1 answer is ' + answer1 + '</br>');
//question 2
document.write('Question 2 answer is ' + answer2 + '</br>');
//question 3
document.write('Question 3 answer is ' + answer3 + '</br>');
//question 4
document.write('Question 4 answer is ' + answer4 + '</br>');
//question 5
document.write('Question 5 answer is ' + answer5);

