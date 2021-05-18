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

var birthday = new Date("May 1, 1983");
var birthday = new Date("May 1, 1983 08:03 pm");

console.log(birthday);

var emptyArray = new Array();
console.log(emptyArray);
emptyArray[0] = 99;
console.log(emptyArray);

var oddNumbers = new Array(3);
console.log(oddNumbers);
console.log(oddNumbers[0]);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
console.log(oddNumbers);

oddNumbers.reverse();
console.log(oddNumbers);

var aString = oddNumbers.join(" - ");
console.log(aString);