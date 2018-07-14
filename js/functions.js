/*

Here we will be looking at Javascript functions:
- functions are a collection of code that does something

*/

function sayHello(){
    var response = prompt("What is your name?");
    alert("Hello " + response + "!");
}

//To call a function we declare it like below.
//sayHello();

//we can also pass information to a function.
//We therefore declare the parameter within the function.

function Greeting(greeting){
    
var response = prompt("What is your name?");
 
alert(greeting + ", " + response + "!");
}

//var message = prompt("Your Message?"); 
//We are passing an argument to the function which the parameter that excepts the argument will then it within the function.
//This is showing the Greeting function accepting a variable as it's arguemnt.
//Greeting(message);



//A function that will get information from it
// functions can accept multiple parameters, which are separated by a comma
var a = prompt("Number 1");
var b = prompt("Number 2");

var string1 = parseFloat(a);
var string2 = parseFloat(b);




function add(a, b){

    //to return a statement from a function we use the keyword return to specify the value to return.
    return a + b;
}

//console.log() is similar to prompt() and alert()
// it is similar to a var_dump() in php, it is used to check what is happening in the application.
console.log( add(string1, string2) );
//console.log( add(120, 310) );