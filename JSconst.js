var now = new Date();

var dateString = now.toString();
var theYear = now.getFullYear();
var theDayOfWeek = now.getDay();

function dayConv(dateGiven) {
    if (dateGiven == 2) {
        console.log("Tuesday");
    }
}

console.log(now);
console.log(dateString);
console.log(theYear);
console.log(theDayOfWeek);
console.log(dayConv(theDayOfWeek));