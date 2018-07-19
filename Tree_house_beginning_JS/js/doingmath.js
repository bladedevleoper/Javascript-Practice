var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var daysYear = 365;


var yearsAlive = 31;

var secondsPerYear = secondsPerMin * minsPerHour * hoursPerDay * 365;

var yearCalc = yearsAlive * secondsPerYear

//calculatoing the number of seconds in a day
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;

document.write('There are ' + secondsPerDay + ' seconds in a day' + '</br>');
document.write('I\'ve been alive for ' + yearCalc + 'seconds');

