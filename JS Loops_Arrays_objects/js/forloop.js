/*

    in this we look at the for loop.
    which is quite popular within Javascript.

*/


//A for loop is used to run an action a particular number of times
//A common usage for a for loop is working with arrays.

/*

for (creation; condition; itteration){

    conditon;
}

*/

//example

var html = '';

for (var i = 1; i <= 90 ; i++){
    html += '<div>' + i + '</div>';
}

document.write(html);