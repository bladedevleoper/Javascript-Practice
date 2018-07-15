/*

Here we will be looking at storing data with Arrays in JS.

*/

//Index Array
var movies = ["Avengers", "Wonder Woman", "Black Panther", "The Last Jedi"];

//movies.push("Iron Man");
//console.log(movies);

//alert(movies);


/*

Foreach Loop in JS


*/

//the foreach loop

//syntax: arrayname.forEach(function(keyname))
movies.forEach(movie => console.log(movie));

//for loop
//start with a variable then the key word of then name of the array
for(var movie of movies){
    //we wil then use the new variable movie.
    document.write(movie);
}


//another way for loop

for(let counter = 1; counter <= 10; counter++){
    //using let as a variable, as it can change.
    console.log( counter );
}

//another way on how to use a for loop
var fruits = ['apple', 'pear', 'cherry'];

for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//the while loop
// it repeats the itteration until a condition is now longer true

var counting = 1;

while (counting < 10){

    console.log( counting );
    counting = counting + 1;

}


//the do while loop
//it is closely related to the while loop
//the difference is that do while doesn't check the condtion until the code block has run once. If the condition is true it keeps itterating until the condition is no longer true.


var myNumber = 1;

do{
    myNumber = myNumber +1;
    console.log( myNumber );
} while (myNumber < 10);


//map()
//map() array itteration methd is used to transform each item in an array into somethine else, leaving the original array unchanged.
//this will capitalise all the words.

const places = ['new york', 'brazil', 'wales'];

const capitalisedPlaces = places.map( place => place.toUpperCase() );
console.log( capitalisedPlaces );





/* ----------------------------------------------------------------------------

    EXAMPLES FROM TEAM TREE HOUSE PRACTICES

------------------------------------------------------------------------------*/


const mul = [5, 10, 15, 20, 25];

let times5 = [];


mul.forEach( multi => times5.push(console.log(multi * 5)));