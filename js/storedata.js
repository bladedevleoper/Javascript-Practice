//Javascript object

//to create an object in JS we define the variable and then start with curley braces.
//an object is a single value that holds multiple values.
//this is a js object
var movie = {

    //Properties of the object
    
    title: 'Wonder Woman', //We can assign another property by adding a comma on the end.
    time: '2pm'
    

}

//Most common way to access data in an object is the . notation.
//alert(objectname.propertyname);
//alert(movie.title);
//This will assign a new time to the property time.
//alert(movie.time = "3pm");

//We can create a new property for the object by doing the following
//objectname.newpropertyname = new value;

//movie.status = 'unavailable';

//console.log(movie);

//array of objects
var animals = [

    {
        //Object 1
        name: 'Lion',
        zone: 'purple',
        food: 'meat',
        feedtime: '2pm',
        status: 'unavailable'
    },

    {
        //Object 2
        name: 'Monkey',
        zone: 'yellow',
        food: 'fruit',
        feedtime: '3pm',
        status: 'unavailable'
    },

    {
        //Object 3
        name: 'Hippo',
        zone: 'blue',
        food: 'grass',
        feedtime: '4pm',
        status: 'unavailable'
    },

    {
        //Object 4
        name: 'Snake',
        zone: 'brown',
        food: 'mice',
        feedtime: '5pm',
        status: 'available'
    }
];

//writing conditional if statements

for(var animal of animals){

    if(animal.status === 'available'){
        document.write(`The animal ${animal.name} feeds at ${animal.feedtime}</br>`);

    } else if (animal.status == '') {
        
        console.log("No Animals");
    } else {
        //`` back ticks are known as template literals used with strings
        //to enter a value of a property wrap it in a ${property / var name}
        document.write(`The ${animal.name} has been fed</br>`);
    }
}
